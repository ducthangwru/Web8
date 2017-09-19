const express = require('express');
const Router = express.Router();

const questionController = require('./controllers/questionController.js');

Router.get('/', (req, res) => {
    questionController.getRandomQuestion((err, question) => {
        if (err === null) {
            res.render('askQuestion', {nav: `/`});
        } else {
            res.render('askQuestion', {nav: `/question/${question._id}`});
        }
    });
});

module.exports = Router;