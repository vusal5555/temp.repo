// Modules
const sayHi = require("./sayHi");
const names = require("./names");
const { items, person } = require("./alternative");
require("./mindGrenade");

const { john, peter } = names;
console.log(items, person);

sayHi(john);

//Built in modules
const os = require("os");

//info about current user
const user = os.userInfo();
console.log(user);

//method retuns system uptime in seconds
console.log(`The System Uptime is ${os.uptime()}s`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
