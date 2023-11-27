const fs = require('fs');
const path = require('path');

const directoryPath = process.argv[2];
const filterExtension = `.${process.argv[3]}`;

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  const filteredFiles = files.filter(file => path.extname(file) === filterExtension);

  filteredFiles.forEach(file => {
    console.log(file);
  });
});
