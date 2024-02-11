import { ToDo, toDoArray, easyArray, moderateArray, hardArray } from "./toDoBuilder";
import {addToDo} from "./addToDo";
import { toDoDisplay } from "./toDoDisplay";

import './styles.css'









const homeBtn = document.querySelector("#homeButton");
const easyBtn = document.querySelector("#easyButton");
const moderateBtn = document.querySelector("#moderateButton");
const hardBtn = document.querySelector("#hardButton");

homeBtn.addEventListener("click", () => {
    toDoDisplay(toDoArray, "Home")
})
easyBtn.addEventListener("click", () => {
    toDoDisplay(easyArray, "Easy")
})
moderateBtn.addEventListener("click", () => {
    toDoDisplay(moderateArray, "Moderate")
})
hardBtn.addEventListener("click", () => {
    toDoDisplay(hardArray, "Hard")
})


toDoDisplay(toDoArray, "Home");


addToDo();