const path = require('path');

console.log(path.sep); // Showing current path (short)

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath); // Showing the full path by arguments


const base = path.basename(filePath); 
console.log(base); // Showing last destination file in the system

const abs = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');

console.log(abs); // Getting the full (absolute) path for the file