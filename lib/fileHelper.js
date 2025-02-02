import { promises as fs, write } from "fs";    //importing the versions of functions where it returns promises to use async syntax
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);    //lib

const tasksFile = join(dirname(_dirname), 'tasks.json');

export async function readTasks(){
    try{
        const data = await fs.readFile(tasksFile, 'utf-8');
        return JSON.parse(data);
    } catch(error){
        if(error.code === 'ENOENT'){
            await fs.writeFile(tasksFile, '[]');
            return [];  //no tasks in newely created file
        }
        throw error;
    }
}

export async function writeTasks(tasks){
    await fs.writeFile(tasksFile, JSON.stringify(tasks, null, 2));
}
// const testTasks = [
//     {
//         id: '1',
//         title: 'Task 1',
//         description: 'Description 1',
//         status: 'pending'
//     },
//     {
//         id: '2',
//         title: 'Task 2',
//         description: 'Description 2',
//         status: 'pending'
//     }
// ];

// writeTasks(testTasks)
// .then(() => readTasks())
// .then(tasks => console.log(tasks))
// .catch(error => console.log(error));