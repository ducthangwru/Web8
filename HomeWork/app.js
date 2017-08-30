const express = require('express');
const fileController = require('./fileController.js');

let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/menu.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html');
});

app.get('/readfile', (req, res) => {
  var data = fileController.readFileSync('test.txt');
  res.send(`<html>
    <head> <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="stylemenu.css">
   </head>
   <body>
    <nav class="menu">
    <span onclick="location='menu.html'">Trang Chủ</span>
    <span onclick="location='about.html'">About</span>
    <span onclick="location='readfile'">Đọc File</span>
    <span>Menu 4</span>
    </nav>
    <h1> ${data} </h1>
    </body>
    </html>`);
});

app.get('/style.css', (req, res) => {
  res.sendFile(__dirname + '/public/style.css');
});

app.listen(6969, () => {
  console.log('Server is up');
});
