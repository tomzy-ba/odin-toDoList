import { ToDo, toDoArray, easyArray, moderateArray, hardArray } from "./toDoBuilder";
import { toDoDisplay } from "./toDoDisplay";

import './styles.css'

new ToDo("hi","what","is", "up", "k", );
new ToDo("lol");
new ToDo("bruh");

toDoDisplay(toDoArray);
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
    new ToDo(title.value, summary.value, dueDate.value, priority.value, status.value, difficulty.value)
    toDoDisplay(toDoArray)
    console.log(easyArray)
    console.log(toDoArray)
})
