export const toDoArray = [];
export const easyArray = [];
export const moderateArray = [];
export const hardArray = [];

export class ToDo {
    constructor(title, summary, dueDate, priority, status, difficulty) {
        this.title = title;
        this.summary = summary;
        this.dueDate = dueDate;
        this.priority = priority
        this.status = status;
        this.difficulty = difficulty;
        toDoArray.push(this)
        if (this.difficulty == "easy") {easyArray.push(this)};
        if (this.difficulty == "moderate") {moderateArray.push(this)};
        if (this.difficulty == "hard") {hardArray.push(this)};

    }
}



