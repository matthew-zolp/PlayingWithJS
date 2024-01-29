const fs = require('node:fs');
fs.readFile('package.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });

  //Example node.js script to read a file from a specific path