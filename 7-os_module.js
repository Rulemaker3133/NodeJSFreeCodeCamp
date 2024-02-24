const os = require('os');

// Info about current user
const user = os.userInfo();
console.log(user);

// Returns the system uptime in seconds
console.log(`Th System Uptime is ${os.uptime()}`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
};

console.log(currentOS);