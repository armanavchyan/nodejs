const fs = require('fs');
fs.readdir('Homework5',(err,files)=>{
    for (const file of files) {
        const buffer = Buffer.alloc(1030);
    fs.readFile(`Homework5/${file}`,function (err, contentText) {
            if(contentText.length>1024){
                fs.appendFile(`newDir/${file}`,contentText.toString() , function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                  })
                fs.unlink(`Homework5/${file}`, (err) => {
                    if (err) throw err;
                    console.log(`Homework5/${file} was deleted`);
                  });
            }
        })
    }
    
    
})