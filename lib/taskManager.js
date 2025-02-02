import chalk from "chalk";
import { readTasks, writeTasks } from "./fileHelper";

class TaskManager{
    getNextTaskNumber(tasks){
        if(tasks.length === 0) return 1;

        const numbers = tasks.map(task => parseInt(task));
        return Math.max(...numbers) + 1;    //used spread operator because max doesn't accept arrays as input
    }
    /**
     * Add a new task
     * @param {string} title
     * @param {string} description
     * @returns {Promise<void>}
     */
    
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