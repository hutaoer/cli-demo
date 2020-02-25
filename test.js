const chalk = require('chalk');

const ora = require('ora');
console.log(chalk.blue.bgRed('hello'));

const snipper = ora(chalk.blue('i love you')).start();

snipper.color = 'red';
setTimeout(() => {
  snipper.stop();
}, 1000)