import { ToDo, toDoArray } from "./toDoBuilder";
import { toDoDisplay } from "./toDoDisplay";

import './styles.css'

new ToDo("hi","what","is", "up");
new ToDo("lol");
new ToDo("bruh");

toDoDisplay(toDoArray);
