const fileController = require('./fileController');
const logData = (data) => {
  console.log(data);
}
//fileController.saveFile('test.txt', 'đm Hiếu óc chó');
fileController.readFile('test.txt', {encoding: 'utf-8'}, logData);
console.log('Hello World');
