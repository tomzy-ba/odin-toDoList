let mainArray = [];
let easyArray = [];
let moderateArray = [];
let hardArray = [];

class ToDoClass{
    constructor(title, summary, dueDate, status, difficulty) {
        this.title = title;
        this.summary = summary;
        this.dueDate = dueDate;
        this.status = status;
        this.difficulty = difficulty;
        if (difficulty == "easy") {easyArray.push(this)};
        if (difficulty == "moderate") {moderateArray.push(this)};
        if (difficulty == "hard") {hardArray.push(this)};
    }
}