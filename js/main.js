import { results } from './components/task.js';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const tasks = await results();
        console.log('Tareas obtenidas:', tasks);
    } catch (error) {
        console.error('Error al obtener tareas:', error);
        alert('Hubo un problema al obtener las tareas. Inténtalo de nuevo más tarde.');
    }
});
const taskInput = document.getElementById('bar__list');
const addTaskBtn = document.getElementById('icon__Check');
const taskList = document.getElementById('taskList');

const addTask = async () => {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Por favor ingresa una tarea válida.');
        return;
    }

    try {
        const response = await fetch('https://6674179975872d0e0a950e53.mockapi.io/todoList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                task: taskText,
                status: 'ready'
            })
        });

        if (!response.ok) {
            throw new Error('Error al agregar la tarea');
        }

        const newTask = await response.json();
        const li = document.createElement('li');
        li.textContent = newTask.task;
        taskList.appendChild(li);
        taskInput.value = '';

    } catch  {
        
        alert('Hubo un problema al agregar la tarea. Inténtalo de nuevo más tarde.');
    }
};
bar__list.addEventListener('change', addTask);
