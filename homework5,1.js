const fs =require('fs');
const os = require('os');
let fileName = os.userInfo().username;
let fileContent = JSON.stringify(os.userInfo());

fs.appendFile(`${fileName}.txt`,fileContent, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });