import { ToDo, toDoArray, easyArray, moderateArray, hardArray } from "./toDoBuilder";
import {addToDo} from "./addToDo";
import { toDoDisplay } from "./toDoDisplay";

import './styles.css'









const homeBtn = document.querySelector("#homeButton");
const easyBtn = document.querySelector("#easyButton");
const moderateBtn = document.querySelector("#moderateButton");
const hardBtn = document.querySelector("#hardButton");

function navbar() {
    const heading = document.querySelector("#heading");
    heading.innerHTML = "Home";

    homeBtn.addEventListener("click", () => {
        toDoDisplay(toDoArray)
        heading.innerHTML = "Home"
    })
    easyBtn.addEventListener("click", () => {
        toDoDisplay(easyArray)
        heading.innerHTML = "Easy"
    })
    moderateBtn.addEventListener("click", () => {
        toDoDisplay(moderateArray)
        heading.innerHTML = "Moderate"
    })
    hardBtn.addEventListener("click", () => {
        toDoDisplay(hardArray)
        heading.innerHTML = "Hard"
    })
    }


navbar();
toDoDisplay(toDoArray);


addToDo();