const fs = require("fs");
const path = require("path");
const emitter = require("./events/emitter");

const filePath = path.join(__dirname, "data", "notes.txt");

function addNote(note) {
  fs.appendFileSync(filePath, note + "\n", "utf-8");
  console.log("✅ Note saved successfully.");
  emitter.emit("noteAdded", note);
}

function getNotes() {
  if (!fs.existsSync(filePath)) {
    console.log("No notes found.");
    return;
  }

  const data = fs.readFileSync(filePath, "utf-8");

  if (!data.trim()) {
    console.log("No notes available.");
    return;
  }

  const notes = data.trim().split("\n");

  console.log("\n📒 Notes:\n");

  notes.forEach((note, index) => {
    console.log(`${index + 1}. ${note}`);
  });
}

module.exports = {
  addNote,
  getNotes,
};
