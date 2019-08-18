#! /usr/bin/env/ node
var program = require('commander');
var chalk = require('chalk');
var fs = require('fs-extra');
var path = require('path');

program
    .version('1.0.0')
    .option('-i --init <name>', 'init a project')

program.parse(process.argv);

if(program.init) {
    var dirName = program.init;
    var projectPath = path.resolve(program.init);
    var projectName = path.basename(projectPath);

    console.log(`start to init a project in ${chalk.green(projectPath)}`);
    // fs.ensureDirSync(projectName);
    if(!fs.ensureDirSync(dirName)) {
        fs.ensureDirSync(dirName);
    }
    try {
        fs.copySync('templates/demo1/', 'hhh/');
        console.log(`${chalk.green('copy template success')}`);
    } catch(err) {
        console.error(err);
    }
    // var cwd = path.join(__dirname, '../templates/demo1');
    // vfs.src(['**/*', '!node_modules/**/*'], {cwd: cwd, dot: true})
    // pipe(through.obj(function(file, src, callback) {
    //     if(!file.stat.isFile()) {
    //         return callback();
    //     }
    //     this.push(file);
    //     return callback();
    // }))
    // .pipe(vfs.dest(projectPath))
    // .on('end', function() {
    //     console.log('init packages...')
    //     process.chdir(projectPath);
    //     require('../lib/install')
    // })
    // .resume();

} else {
    console.error(chalk.red('缺啥参数'))
}

program.on('command:*', function () {
  console.error('Invalid command: %s\nSee --help for a list of available commands.', program.args.join(' '));
  process.exit(1);
});