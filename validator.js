let validator = require('validator');

console.log(validator.isEmail('foo@bar.com'));
console.log(validator.isIMEI('1234567891234566'));
console.log(validator.isURL('http://google.com'));
