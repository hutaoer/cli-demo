#! /usr/bin/env node 

const program = require('commander')
const inquirer = require('inquirer')
const _ = require('lodash')
const chalk = require('chalk')
const fs = require('fs-extra');
const path = require('path');

program
    .command('module')
    .alias('m')
    .description('创建新的模块')
    .option('--name [moduleName]')
    .option('--sass', '启用sass')
    .option('--less', '启用less')
    .action(option => {
        var config = _.assign({
            moduleName: null,
            description: '',
            sass: false,
            less: false
        }, option)
        var promps = []
        
        console.log('')  
        console.log(chalk.red('开启前端工程化之路'));
        console.log('')        

        if(config.moduleName !== 'string') {
              promps.push({
                type: 'input',
                name: 'moduleName',
                message: '请输入模块名称',
                validate: function (input){
                    if(!input) {
                        return '不能为空'
                    }
                    return true
                }
              })
        } 

        if(config.description !== 'string') {
            promps.push({
                type: 'input',
                name: 'moduleDescription',
                message: '请输入模块描述'
            })
        }

        if(config.sass === false && config.less ===false) {
          promps.push({
            type: 'list',
            name: 'cssPretreatment',
            message: '想用什么css预处理器呢',
            choices: [
              {
                name: 'Sass/Compass',
                value: 'sass'
              },
              {
                name: 'Less',
                value: 'less'
              }
            ]
          })
        }

        inquirer.prompt(promps).then(function (answers) {
            console.log(chalk.green('收工咯'))
            console.log(chalk.blue('收工咯'))
            console.log(chalk.blue.bgRed('收工咯'))
            console.log(answers)
        })
    }) 


program
    .command('init')
    .alias('i')
    .description('创建新的项目')
    .option('--init <name>', 'init a project')
    .action((option) => {
        var dirName = option;
        var projectPath = path.resolve(dirName);
        var projectName = path.basename(projectPath);

        console.log(`start to init a project in ${chalk.green(projectPath)}`);
        // fs.ensureDirSync(projectName);
        if(!fs.ensureDirSync(dirName)) {
            fs.ensureDirSync(dirName);
        }
        try {
            fs.copySync(path.resolve(__dirname, 'templates/demo1/'), path.resolve(__dirname, 'hhh/'));
            console.log(`${chalk.green('copy template success')}`);
        } catch(err) {
            console.error(err);
        }
    })

program.parse(process.argv)