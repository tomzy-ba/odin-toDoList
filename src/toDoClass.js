export let mainArray = [];
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

        if (difficulty == "easy") {easyArray.push(this)};
        if (difficulty == "moderate") {moderateArray.push(this)};
        if (difficulty == "hard") {hardArray.push(this)};
    }
}