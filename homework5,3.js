const fs = require('fs');
const stream = require('stream');
const readStream = fs.createReadStream('./homework3.txt', 'utf-8');
const writeStream = fs.createWriteStream('./replace.txt');
readStream.on('data', (data) => {
   
        writeStream.write(data.replace(/\,/g,' '));
})
fs.unlink('./homework3.txt', (err) => {
    if (err) throw err;
    console.log('./homework3.txt was deleted');
  });