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

    /**
     * Complete a task (i.e. sets status to completed)
     * @param {string} id Task ID
     * @returns {Promise<void>}
     */
    /**
     * Delete a task
     * @param {string} id Task ID
     * @returns {Promise<void>}
     */
    //at the end: export an object of this class and import in index.js
}

// testcases
// let newtask = new TaskManager;
// newtask.addTask('task2', 'task1desc');