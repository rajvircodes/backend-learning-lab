const emitter = require("./emitter");

emitter.on("userLogin", (name) => {
  console.log("New User login", name);
});
