const { add, subtract, multiply, divide } = require("./math");
require("./events/noteEvent");
require("./events/greetEvent");

const log = require("./logger");
const greet = require("./greeting");
const { addNote, getNotes } = require("./notes");

const message = greet("Rajvir");

const command = process.argv[2];

switch (command) {
  case "add": {
    const num1 = Number(process.argv[3]);
    const num2 = Number(process.argv[4]);

    if (isNaN(num1) || isNaN(num2)) {
      return log("Please provide valid numbers.");
    }

    log(`Result: ${add(num1, num2)}`);
    break;
  }

  case "subtract": {
    const num1 = Number(process.argv[3]);
    const num2 = Number(process.argv[4]);

    if (isNaN(num1) || isNaN(num2)) {
      return log("Please provide valid numbers.");
    }

    log(`Result: ${subtract(num1, num2)}`);
    break;
  }

  case "multiply": {
    const num1 = Number(process.argv[3]);
    const num2 = Number(process.argv[4]);

    if (isNaN(num1) || isNaN(num2)) {
      return log("Please provide valid numbers.");
    }

    log(`Result: ${multiply(num1, num2)}`);
    break;
  }

  case "divide": {
    const num1 = Number(process.argv[3]);
    const num2 = Number(process.argv[4]);

    if (isNaN(num1) || isNaN(num2)) {
      return log("Please provide valid numbers.");
    }

    log(`Result: ${divide(num1, num2)}`);
    break;
  }

  case "note": {
    const note = process.argv.slice(3).join(" ");

    if (!note) {
      return log("Please provide a note.");
    }

    addNote(note);
    break;
  }

  case "list":
    getNotes();
    break;

  case "greet": {
    const name = process.argv[3] || "Guest";
    console.log(greet(name));
    break;
  }

  default:
    console.log(`
Available Commands:

node src/index.js add 10 20
node src/index.js subtract 20 5
node src/index.js multiply 5 4
node src/index.js divide 20 4
node src/index.js greet Rajvir
node src/index.js note "Learn Node.js"
node src/index.js list
`);
}
