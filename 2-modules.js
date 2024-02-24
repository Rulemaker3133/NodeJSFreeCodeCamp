// CommonJS, every file in NodeJS is a module (by default)
// Modules - Encapsulated Code (only share minimum)

const sayHi = require('./4-utils.js')
const names = require('./3-names.js'); // importing data to module
const data = require('./5-alternative_export.js');
require('./6-basic_functionality.js') // Even if the module is not exported, but it have called fucntion - it will work

console.log(data);

sayHi(names.john);
sayHi(names.eugene);