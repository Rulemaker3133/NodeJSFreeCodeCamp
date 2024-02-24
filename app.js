// npm - global command, comes with node.js
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName> 

// global dependency - use it in any ptoject
// npm install -g <packageName> 
// sudo npm  install -g <packageName> (mac)

// dev dependency
// npm i <packageName> -D
// npm i <packageName> --save-dev

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the roort, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// npm uninstall <packageName> // Uninstalling modules

// npm install // Installing all the packages, reading the list from package.json
// Useful, when there are no /node_modules or package-lock.json was lost

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items); // Transforming n-D arrays in the flat array
console.log(newItems);
console.log('newItems');

