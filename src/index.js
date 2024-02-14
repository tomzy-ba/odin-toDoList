import { ToDoClass, mainArray, easyArray, moderateArray, hardArray, storeArrays, loadArrays } from "./toDoClass";
import { display } from "./display";


import "./styles.css";



function navbar() {
    const homeBtn = document.querySelector("#homeButton");
    const easyBtn = document.querySelector("#easyButton");
    const moderateBtn = document.querySelector("#moderateButton");
    const hardBtn = document.querySelector("#hardButton");
    const heading = document.querySelector("#heading");

    heading.innerHTML = "Home";

    homeBtn.addEventListener("click", () => {
        display(mainArray);
        heading.innerHTML = "Home";
    })
    easyBtn.addEventListener("click", () => {
        display(easyArray);
        heading.innerHTML = "Easy";
    })
    moderateBtn.addEventListener("click", () => {
        display(moderateArray);
        heading.innerHTML = "Moderate";
    })
    hardBtn.addEventListener("click", () => {
        display(hardArray);
        heading.innerHTML = "Hard";
    })
    }

function addToDo() {
const addBtn = document.querySelector("#addButton");
const dialog = document.querySelector("#dialog")
const submitDialog = document.querySelector("#submitDialog");
const closeDialog = document.querySelector("#closeDialog");

const title = document.querySelector("#titleInput");
const summary = document.querySelector("#summaryInput");
const dueDate = document.querySelector("#dueDateInput");
const priority = document.querySelector("#priorityInput");
const status = document.querySelector("#statusInput");
const difficulty = document.querySelector("#difficultyInput");

addBtn.addEventListener("click", () => {
    dialog.showModal();
})
submitDialog.addEventListener("click", () => {
    new ToDoClass(title.value, summary.value, dueDate.value, priority.value, status.value, difficulty.value)
    display(mainArray)
    storeArrays();
    
});
closeDialog.addEventListener("click", () => {
    dialog.close();
})
}

const interval = setInterval(storeArrays, 3000);
loadArrays();

navbar()
addToDo()

display(mainArray)

