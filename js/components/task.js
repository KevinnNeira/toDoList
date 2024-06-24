import { getAsks } from "./data.js";

const containerTask = document.querySelector("#list__task");

export const results = async (id) => {
    containerTask.innerHTML = ``;

    const response = await getAsks();
    const tasks = await response.json();
    
    tasks.forEach(function(task){
        let taskName = task.task;
        let status = task.status;
        let id = task.id;

        if (status == `On hold`){
            let plantilla = `
            <div class="list__homework">
                <div class="title__container">
                    <p id="homework">${taskName}</p>
                </div>
                <div class="images__container">
                    <img onclick="changeStatus(this)" id="${id}" class="icon__Check" src="storage/img/garrapata.png">
                    <img onclick="deleteTask(this)" id="${id}" class="icon__Delete" src="storage/img/eliminar.png">
                </div>
            </div>
            `;
            containerTask.innerHTML += plantilla;
        }else if (status == `ready`){
            let plantilla = `
            <div class="list__homework2">
                <div class="title__container">
                    <p id="homework2">${taskName}</p>
                </div>
                <div class="images__container">
                    <img onclick="changeStatus(this)" id="${id}" class="icon__Check" src="storage/img/garrapata.png">
                    <img onclick="deleteTask(this)" id="${id}" class="icon__Delete"  src="storage/img/eliminar.png">
                </div>
            </div>
            `;
            containerTask.innerHTML += plantilla;
        }
    });
};