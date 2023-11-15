const fs = require("fs");

// this function writes a prompt to the console and returns whatever the user input before a new line or carriage return
// you don't need to touch or understand any of this code.
function getUserInput(prompt) {
  fs.writeSync(1, String(prompt));
  let s = "",
    buf = Buffer.alloc(1);
  while (buf[0] - 10 && buf[0] - 13) (s += buf), fs.readSync(0, buf, 0, 1, 0);
  return s.slice(1);
}

module.exports = {
  getUserInput,
};
