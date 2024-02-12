
let mainArray = [];
export let easyArray = [];
export let moderateArray = [];
export let hardArray = [];

export class ToDoClass{
    constructor(title, summary, dueDate, status, difficulty) {
        this.title = title;
        this.summary = summary;
        this.dueDate = dueDate;
        this.status = status;
        this.difficulty = difficulty;

        mainArray.push(this);

        if (difficulty == "easy") {
            easyArray.push(this)
        }
        else if(difficulty == "moderate") {
            moderateArray.push(this)
        }
        else if (difficulty == "hard") {
            hardArray.push(this)
        };
    }
}

let newArray = JSON.stringify(mainArray);
localStorage.setItem("newArray", newArray);

let storedArray = localStorage.getItem("newArray");
storedArray = JSON.parse(storedArray);
console.log(storedArray);

export let newMainArray = storedArray;