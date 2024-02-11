export const toDoArray = [];

export class ToDo {
    constructor(title, summary, dueDate, priority, status, tags, difficulty) {
        this.title = title;
        this.summary = summary;
        this.dueDate = dueDate;
        this.priority = priority
        this.status = status;
        this.difficulty = difficulty;
        toDoArray.push(this)
    }
}



