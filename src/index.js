import { ToDoClass, mainArray, easyArray, moderateArray, hardArray } from "./toDoClass";
import { display } from "./display";
import { addToDo } from "./addToDo";


import "./styles.css"


new ToDoClass("bruh", "LOL")

function navbar(page) {
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




navbar()
addToDo()

console.log(mainArray);
display(mainArray)