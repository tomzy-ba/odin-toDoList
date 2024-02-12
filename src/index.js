import { ToDo, toDoArray, easyArray, moderateArray, hardArray } from "./toDoBuilder";
import {addToDo} from "./addToDo";
import { toDoDisplay } from "./toDoDisplay";
import { navbar } from "./navbar";

import './styles.css'

new ToDo("hiew", "brh")

function bruh(){
let newArray = JSON.stringify(toDoArray);
localStorage.setItem("toDoArray", newArray);

let storedArray = localStorage.getItem("toDoArray");
storedArray = JSON.parse(storedArray);


toDoArray = storedArray;
}








navbar();
toDoDisplay(toDoArray);


addToDo();