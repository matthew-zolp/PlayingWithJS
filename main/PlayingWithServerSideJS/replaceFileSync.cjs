const fs = require('fs');
const file1Path = './exampleText.txt';
const file2Path = './exampleText2.txt';

const readAndWrite = async () => {
   try {
      // Add code to read the file named 'exampleText'
      const fileContent = fs.readFileSync(file1Path, 'utf-8');
      // Add code to replace the content of the file named 'exampleText2'
      fs.writeFileSync(file2Path, fileContent);
   }
    catch(error){
      console.error(error);
   }
}

readAndWrite();
