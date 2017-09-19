const express = require('express');
const Router = express.Router();

const questionController = require('./controllers/questionController.js');

Router.get('/', (req, res) => {
    questionController.getRandomQuestion((err, question) => {
        if (err === null) {
            res.render('askQuestion', {nav: `/`, askview: true});
        } else {
            res.render('askQuestion', {nav: `/question/${question._id}`, askview: true});
        }
    });
});


module.exports = Router;