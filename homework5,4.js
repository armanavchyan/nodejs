const fs = require('fs');
const readFile = fs.readFileSync('./array.js', 'utf-8');
const nameFoDir = readFile.replace(/[^a-zA-Z]/g, ' ').split(' ').filter(item =>item.length > 1).slice(1);
fs.mkdir(`./${nameFoDir[0]}`, function(err) {
    if (err) {
      console.log(err)
    } else {
      console.log(`New directory name is ${nameFoDir[0]}`)
    }
  })
  for (let i = 1; i < nameFoDir.length; i++) {
    fs.appendFile(`${nameFoDir[0]}/${nameFoDir[i]}.${nameFoDir[i]}`,`${nameFoDir[i]}`,function (err) {
        if (err) throw err;
        console.log('Saved!');
      })
      
  }
  