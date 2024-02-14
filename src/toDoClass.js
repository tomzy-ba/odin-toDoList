
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
        this.index = ""

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

export function storeArrays() {
  localStorage.setItem('mainArray', JSON.stringify(mainArray));
  localStorage.setItem('easyArray', JSON.stringify(easyArray));
  localStorage.setItem('moderateArray', JSON.stringify(moderateArray));
  localStorage.setItem('hardArray', JSON.stringify(hardArray));
}

export function loadArrays() {
  mainArray = JSON.parse(localStorage.getItem('mainArray')) || [];
  easyArray = JSON.parse(localStorage.getItem('easyArray')) || [];
  moderateArray = JSON.parse(localStorage.getItem('moderateArray')) || [];
  hardArray = JSON.parse(localStorage.getItem('hardArray')) || [];
}


