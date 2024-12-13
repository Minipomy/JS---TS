// Dependencies
const { Command } = require("commander");

// Commands routes
const list = require("../commands/list.js");
// const { add } = require('../commands/add.js')
// const { update } = require('../commands/update.js')
// const { delete } = require('../commands/delete.js')

// Commander Init
const program = new Command();

// Inputs Outputs
program
  .command("list")
  .description("List all Task")
  .usage("-l, --list")
  .action(list);

program.parse(process.argv);
