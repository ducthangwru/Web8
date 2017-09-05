const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const fileController = require('./fileController');
const homeRouter = require('./HomeRouter');
const askRouter = require('./AskQuestionRouter');
const utilsRouter = require('./UtilsRouter');
const questionRouter = require('./questionRouter');

let app = express();

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(__dirname + '/public'));
app.use('/', homeRouter);
app.use('/ask', askRouter);
app.use('/api', utilsRouter);
app.use('/question', questionRouter);

app.get('/About', (req, res) => {
    res.render('about');
});

app.get('/File', (req, res) => {
    let textRender = fileController.readFileSync('test.txt');
res.render('questions', {textRender});
});

app.listen(6969, () => {
    console.log('Server is ready');
});