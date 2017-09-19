const express = require('express');
const Router = express.Router();
const fileController = require('./fileController');

const {getRandomQuestion, getQuestionById} = require('./controllers/questionController.js');

Router.get('/', (req, res) => {
    res.render('idQuestion');
})

Router.get('/:id', (req, res) => {
    getQuestionById(req.params.id, (question) => {
        getRandomQuestion((newQuestion) => {
            res.render('idQuestion', {
                question: question.question,
                nYes: question.yes,
                nNo: question.no,
                nav: `/question/${newQuestion._id}`
            });
        });
    });
});

module.exports = Router;