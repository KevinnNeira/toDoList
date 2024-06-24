import { getAsks } from "./data.js";

const containerTask = document.querySelector("#list__task");

export const results = async (id) => {
    try {
        const response = await getAsks();
        const user = await response.json();
        const { task } = user;

        const plantilla = `
        <div class="list__homework">
            <div class="title__container">
                <p id="homework">${task}</p>
            </div>
            <div class="images__container">
                <img id="icon__Check" src="storage/img/garrapata.png">
                <img id="icon__Delete" src="storage/img/eliminar.png">
            </div>
        </div>
        `;
        containerTask.innerHTML += plantilla;
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
};