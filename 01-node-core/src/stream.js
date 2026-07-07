const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data", "notes.txt");

// Create a readable stream
const readStream = fs.createReadStream(filePath, {
  encoding: "utf8",
  highWaterMark: 100, // Read 5 bytes at a time
});

// Fired whenever a chunk is received
readStream.on("data", (chunk) => {
  console.log("Chunk Received:");
  console.log(chunk);
  console.log("----------------------");
});

// Fired when the file has been completely read
readStream.on("end", () => {
  console.log("✅ Finished reading file.");
});

// Fired if any error occurs
readStream.on("error", (err) => {
  console.log("❌ Error:", err.message);
});

const fs = require("fs");
const path = require("path");

const source = path.join(__dirname, "data", "notes.txt");
const destination = path.join(__dirname, "data", "copy.txt");

const readStream = fs.createReadStream(source);
const writeStream = fs.createWriteStream(destination);

readStream.pipe(writeStream);

writeStream.on("finish", () => {
  console.log("✅ File copied successfully.");
});

