import { results } from './components/task.js';
import { geTaskId } from './components/data.js';

await results()

document.addEventListener('DOMContentLoaded', async () => {
        const tasks = await results();
});
const taskInput = document.querySelector('#bar__list');
const addTaskBtn = document.getElementById('icon__Check');
const taskList = document.getElementById('taskList');

const addTask = async () => {
    let taskText = taskInput.value;
    console.log(taskText)

    const response = await fetch('https://6674179975872d0e0a950e53.mockapi.io/todoList', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            task: taskText,
            status: 'On hold'
        })
    });

    await results();
};
bar__list.addEventListener('change', addTask);


const deleteTask = async(element) => {
    let id = element.id;
    console.log(id)

    const response = await fetch(`https://6674179975872d0e0a950e53.mockapi.io/todoList/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    await results();
}
document.deleteTask = deleteTask;

const changeStatus = async(element) => {
    let id = element.id;
    console.log(id)

    let task = await geTaskId(id);
    task = await task.json();
    console.log(task)

    if (task.status == `ready`){
        task.status = `On hold`;
    }else if(task.status == `On hold`){
        task.status = `ready`;
    }


    console.log(task.status)
    const response = await fetch(`https://6674179975872d0e0a950e53.mockapi.io/todoList/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    });

    await results();
}
document.changeStatus = changeStatus;