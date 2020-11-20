"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.greet = void 0;

var _fs = require("fs");

const greet = async () => {
  try {
    return await _fs.promises.readFile('./assets/greet.txt', 'utf-8');
  } catch (error) {
    throw error;
  }
};

exports.greet = greet;