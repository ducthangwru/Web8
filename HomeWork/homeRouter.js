const express = require('express');
const Router = express.Router();

const {getRandomQuestion, getQuestionList} = require('./controllers/questionController.js');

Router.get('/', (req, res) => {
    getQuestionList((err, questions) => {
        if (err === null) {
            if (questions.length === 0) {
                res.render('home', {
                    question: "Không có câu hỏi nào"
                });
            } else {
                getRandomQuestion((err, question) => {
                    res.render('home', {
                        question: question.question,
                        href: `api/question/${question._id}`
                    });
                });
            }
        }
    });
});


module.exports = Router;