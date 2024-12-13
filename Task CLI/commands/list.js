const storage = require("../utils/storage.js");
const { DEBUG } = require("../configs/debug.js");

module.exports = () => {
  const tasks = storage.readTask();
  if (tasks.lenght === 0) {
    if (DEBUG) {
      console.log("TEST | No actives Task");
    }
    return false;
  }
  tasks.forEach((task) => {
    if (DEBUG) {
      console.log("TEST | task.forEach Done");
    }
    console.log(
      `\n${task.id} | ${task.title}\n${task.details}\n${
        task.status ? "Completed" : "In Progress"
      }`
    );
  });
};
