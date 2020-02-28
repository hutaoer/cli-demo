#!/usr/bin/env node 
const cm = require('commander');
const iq = require('inquirer');
cm.version('1.0.0', '-v --version');
cm.option('-a -atest', 'this is test');
cm.command('init <name>').action((name) => {
  console.log(`you input name is ${name}`);
  iq.prompt([
    {
      type: 'input',
      name: 'author',
      message: 'your name?'
    },
    {
      type: 'input',
      name: 'age',
      message: 'how old are you?'
    }
  ]).then((result) => {
    console.log(result)
  })
})
cm.parse(process.argv);