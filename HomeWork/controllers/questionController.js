const questionModel = require('../questionSchema');

const addNewQuestion = (question, callback) => {
    let newQuestion = {
        question
    }
    questionModel.create(newQuestion, (err, question) => {
        if (err) {
            console.log(err);
        } else {
            callback(null, question);
        }
    });
};

const answerQuestion = (questionType, callback) => {
    questionModel.findOneAndUpdate({_id: questionType.id}, {yes: questionType.yes, no: questionType.no}, (err, question) => {
        if (err) {
            console.log(err);
        } else {
            callback(null, question);
        }
    });
};

const getRandomQuestion = (callback) => {
    getQuestionList((err, questions) => {
        if (err === null) {
            if (questions.length > 0) {
                question = questions[Math.floor((Math.random() * questions.length))];
                callback(null, question);
            } else {
                callback(null);
            }
        } else {
            console.log(err);
        }
    });
};

const getQuestionList = (callback) => {
    questionModel.find({}, (err, questions) => {
        if (err) {
            console.log(err);
        } else {
            callback(null, questions);
        }
    });
}

const getQuestionById = (id, callback) => {
    questionModel.findOne({_id: id}, (err, question) => {
        if (err) {
            console.log(err);
        } else {
            callback(null, question);
        }
    });
};


module.exports = {
    addNewQuestion,
    answerQuestion,
    getRandomQuestion,
    getQuestionById,
    getQuestionList
}