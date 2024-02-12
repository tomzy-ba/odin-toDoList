export let toDoArray = bruh([]);
export let easyArray = bruh([]);
export let moderateArray = bruh([]);
export let hardArray = bruh([]);

export class ToDo {
    constructor(title, summary, dueDate, priority, status, difficulty) {
        this.title = title;
        this.summary = summary;
        this.dueDate = dueDate;
        this.priority = priority
        this.status = status;
        this.difficulty = difficulty;
        toDoArray.push(this)
        if (difficulty == "easy") {easyArray.push(this)};
        if (difficulty == "moderate") {moderateArray.push(this)};
        if (difficulty == "hard") {hardArray.push(this)};
    }
}


function bruh(enterArray){
let newArray = JSON.stringify(enterArray);
localStorage.setItem("toDoArray", newArray);

let storedArray = localStorage.getItem("toDoArray");
storedArray = JSON.parse(storedArray);


return storedArray;
}
