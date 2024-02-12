export let toDoArray = [];
export let easyArray = [];
export let moderateArray = [];
export let hardArray = [];

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



