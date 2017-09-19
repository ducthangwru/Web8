const express = require('express');
const Router = express.Router();
const fileController = require('./fileController');
const questionController = require('./controllers/questionController.js');

Router.get('/', (req, res) => {

});

Router.get('/question', (req, res) => {
    questionController.getRandomQuestion((err, question) => {
        res.send(question);
    });
});

Router.post('/question', (req, res) => {
    questionController.addNewQuestion(req.body.question, (err, question) => {
        if (err === null) {
            res.redirect(`/question/${question.id}`);
        }
    });
});

Router.post('/question/:id', (req, res) => {
    questionController.getQuestionById(req.params.id, (err, question) => {
        if (req.body.choice === 'yes') {
            question.yes += 1;
        } else {
            question.no += 1;
        }
        questionController.answerQuestion(question, (err, updatedQuestion) => {
            res.redirect(`/question/${updatedQuestion.id}`);
        });
    });
});


module.exports = Router;