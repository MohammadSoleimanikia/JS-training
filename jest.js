// package.json in a seprate file all files comes together for example
{
    "name": "jest-testing",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "jest"
    },
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "jest": "^29.5.0"
    }
  }


//times two function in a seprate file
function timesTwo(number) {
    return number*2
}
module.exports = timesTwo;

//jest code
const timesTwo = require('./timesTwo');
test('returns the number times 2', () => {
    expect(timesTwo(10)).toBe(20)
});

//run with npm run test