const fs = require('fs');
const renamedName = `${new Date().getMonth()}_${new Date().getDay()}_${new Date().getHours()}_`+
`${new Date().getMinutes()}_${new Date().getSeconds()}`;
fs.rename('user.txt', `${renamedName}.txt`, function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });