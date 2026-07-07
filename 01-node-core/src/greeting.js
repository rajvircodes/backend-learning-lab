const emitter = require("./events/emitter");

function greet(name) {
  emitter.emit("userLogin", name);
  return `Hello ${name}! Welcome to node js core!`;
}

module.exports = greet;
