const fs = require("fs");
const path = require("path");
const { DEBUG } = require("../configs/debug.js");

const filePath = path.join(__dirname, "../data/task_data.json");

const readTask = () => {
  if (!fs.existsSync(filePath)) {
    if (DEBUG) {
      console.log("TEST | File Does not exists");
    }
    return [];
  }
  if (DEBUG) {
    console.log("TEST | File verification Passed");
  }
  const data = fs.readFileSync(filePath);
  return JSON.parse(data).tasks;
};

const writeTask = (tasks) => {
  if (DEBUG) {
    console.log("TEST | Writing JSON file");
  }
  fs.writeFileSync(filePath, JSON.stringify({ tasks }, null, 2));
};

module.exports = { readTask, writeTask };
