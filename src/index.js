import { ToDo, toDoArray, easyArray, moderateArray, hardArray } from "./toDoBuilder";
import {addToDo} from "./addToDo";
import { toDoDisplay } from "./toDoDisplay";
import { navbar } from "./navbar";

import './styles.css'











navbar();
toDoDisplay(toDoArray);


addToDo();