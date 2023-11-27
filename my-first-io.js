const fs = require('fs');
const filePath = process.argv[2];
const fileContent = fs.readFileSync(filePath);
const newlineCount = fileContent.toString().split('\n').length - 1;
console.log(newlineCount);