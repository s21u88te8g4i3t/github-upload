"use strict";

var _greet = require("./greet");

console.log('Sync start');

(async () => {
  console.log('Async start');
  console.log(await (0, _greet.greet)());
  console.log('Async end');
})();

console.log('Sync end');