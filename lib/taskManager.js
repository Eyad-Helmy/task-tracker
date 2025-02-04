import chalk from "chalk";
import { readTasks, writeTasks } from "./fileHelper.js";

class TaskManager{
    getNextTaskNumber(tasks){
        if(tasks.length === 0) return 1;

        const numbers = tasks.map(task => parseInt(task.id));
        return Math.max(...numbers) + 1;    //used spread operator because max doesn't accept arrays as input
    }
    /**
     * Add a new task
     * @param {string} title
     * @param {string} description
     * @returns {Promise<void>}
     */
    async addTask(title, description){      //the parameters are inputed by user 
        const tasks = await readTasks();
        const taskid = this.getNextTaskNumber(tasks);

        const newTask = {
            id: taskid.toString(),
            title,
            description,
            status: 'pending',
            createdAt: new Date().toISOString()
        }
        tasks.push(newTask);
        await writeTasks(tasks);
        console.log(chalk.green('✓ Task added successfully'));
        console.log(chalk.blue(`Task ID: ${newTask.id}`)); // Show the ID for reference
    }
     /**
     * List all tasks
     * @param {string} [status] Optional status filter
     * @returns {Promise<void>}
     */
    async listTasks(status){
        const tasks = await readTasks();
        const filteredTasks = status ? tasks.filter(task => task.status === status) : tasks;

        if(filteredTasks.length === 0){
            console.log(chalk.yellow("No tasks Found!"));
            return;
        }

        filteredTasks.forEach(task => {
            const statusColor = task.status === 'completed' ? chalk.green : chalk.yellow;
            console.log(
                `ID: ${chalk.blue(task.id)}\n` +
                `Title: ${chalk.red(task.title)}\n` + 
                `Description: ${chalk.gray(task.description)}\n` + 
                `Status: ${statusColor(task.status)}\n` + 
                `Created At: ${chalk.gray(task.createdAt)}\n`
            )
        });
    }
    /**
     * Complete a task
     * @param {string} id Task ID
     * @returns {Promise<void>}
     */
    async completeTask(id){
        const tasks = await readTasks();
        const stringid = id.toString();  //incase id is inputed as number

        const taskobjectIndex = tasks.findIndex(task => task.id === stringid);  //returns -1 if array element is not found

        if(taskobjectIndex === -1){
            console.log(chalk.red('Task not found'))
            return;
        }
        if(tasks[taskobjectIndex].status === 'completed'){
            console.log(chalk.green('Task is already complete!'));
        } else {
            tasks[taskobjectIndex].status = 'completed';
            await writeTasks(tasks);
            console.log(chalk.green('✓ Task marked as completed'));
        }
    }
    /**
     * Delete a task
     * @param {string} id Task ID
     * @returns {Promise<void>}
     */
    async deleteTask(id){
        const tasks = await readTasks();
        const stringid = id.toString();  //incase id is inputed as number

        const taskobjectIndex = tasks.findIndex(task => task.id === stringid);

        if(taskobjectIndex === -1){
            console.log(chalk.red('Task not found'))
            return;
        }
        tasks.splice(taskobjectIndex, 1);
        await writeTasks(tasks);
        console.log(chalk.green('✓ Task deleted successfully'));
    }
    //at the end of file: export an object of this class and import in index.js
}

export const taskManager = new TaskManager;

// // testcases
// let newtask = new TaskManager;
// newtask.addTask('task2', 'task1desc');
// async function test() {
//     await newtask.completeTask('3');
//     await newtask.deleteTask('2');
//     await newtask.addTask('test', 'this is a test for how it would look like when we add a task after deleting one');
//     await newtask.listTasks();
// }
// test();