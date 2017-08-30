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

module.exports = {
  saveFile,
  readFile
}
