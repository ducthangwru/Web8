const fs = require('fs');

function saveFile(filename, data) {
  fs.writeFileSync(filename, data);
}

const readFile = (filename, option, callback) => {
  let result = fs.readFile(filename, option, (err, data) => {
    callback(data);
  });

  return result;
}

const readFileSync = (filename) => {
  return fs.readFileSync(filename, {encoding :'utf-8'});
}

module.exports = {
  saveFile,
  readFile,
  readFileSync
}
