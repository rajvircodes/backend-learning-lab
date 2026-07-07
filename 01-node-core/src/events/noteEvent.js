const emitter = require("./emitter");

emitter.on("noteAdded", (note) => {
  console.log("\nNew note added ✅");
  console.log(note);
});


emitter.on("noteAdded", () => {
  console.log("🕒", new Date().toLocaleTimeString());
});