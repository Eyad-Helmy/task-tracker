#!node
import { Command } from "commander";
import inquirer from "inquirer";
import chalk from "chalk";
import { taskManager } from "./lib/taskManager.js";     //TaskManager class instance

const program = new Command();

program
    .version('1.0.0')
    .description(chalk.blue.bold("A command-line task manager application"));

program
    .command("add")
    .description("Add a new task")
    .action(async () => {
        try {
            const userAnswers = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: 'Enter a task title: ',
                    validate: input => input.length >= 3 || "Title must be at least 3 characters long"
                },
                {
                    type: 'input',
                    name: 'description',
                    message: "Enter the task's description: ",
                    validate: input => input.length >= 3 || "Title must be at least 3 characters long"
                }
            ])
            await taskManager.addTask(userAnswers.title, userAnswers.description);
        } catch (error) {
            console.error("\n Error: " + error.message);
        }
    })
program
    .command("list")
    .description("list tasks")
    .argument('[status]')
    .action(async (status) => {
        try {
            if(status && !['pending', 'completed'].includes(status)){
                throw new Error("You can only filter tasks by status pending or complete")
            }
            await taskManager.listTasks(status)
        } catch (error) {
            console.error(chalk.red("\n Error: " + error.message));
        }
    });
program
    .command("complete")
    .description("Set the status for a task to competed")
    .argument('<id>')
    .action(async (id) => {
        try {
            const confirm = await inquirer.prompt({
                type: 'confirm',
                name: 'confirm',
                message: 'Confirm marking the task with the following id as complete',
                default: false
            })
            await taskManager.completeTask(id);
        } catch (error) {
            console.error("\n Error: " + error.message);
        }
    })
program
    .command("delete")
    .description("Delete a task")
    .argument("<id>")
    .action(async (id) => {
        try {
            const confirm = await inquirer.prompt({
                type: 'confirm',
                name: 'confirm',
                message: 'Confirm deleting the task with the following id',
                default: false
            })
            await taskManager.deleteTask(id);
        } catch (error) {
            console.error("\n Error: " + error.message);
        }
    })
    
program.parse(process.argv);