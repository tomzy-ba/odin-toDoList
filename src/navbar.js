import { toDoDisplay } from "./toDoDisplay";

   
export function navbar() {
    const homeBtn = document.querySelector("#homeButton");
    const easyBtn = document.querySelector("#easyButton");
    const moderateBtn = document.querySelector("#moderateButton");
    const hardBtn = document.querySelector("#hardButton");
    const heading = document.querySelector("#heading");

    heading.innerHTML = "Home";

    homeBtn.addEventListener("click", () => {
        toDoDisplay(toDoArray)
        heading.innerHTML = "Home"
    })
    easyBtn.addEventListener("click", () => {
        toDoDisplay(easyArray)
        heading.innerHTML = "Easy"
    })
    moderateBtn.addEventListener("click", () => {
        toDoDisplay(moderateArray)
        heading.innerHTML = "Moderate"
    })
    hardBtn.addEventListener("click", () => {
        toDoDisplay(hardArray)
        heading.innerHTML = "Hard"
    })
    }

