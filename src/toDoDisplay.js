export function toDoDisplay(array) {
    const content = document.querySelector("#content");

    const homeContent = document.createElement("div");
    content.append(homeContent);

    const homeList = document.createElement("ul");
    homeContent.append(homeList)

    array.forEach(obj => {
        const toDoLi = document.createElement("div");
        toDoLi.innerText = obj.title;
        homeList.append(toDoLi)
        
        const toDoInfo = document.createElement("div");
        toDoInfo.classList.add("hidden");
        toDoLi.append(toDoInfo);

        for (const property in obj) {
        const toDoSummary = document.createElement("div")
        toDoInfo.append(toDoSummary);

        }

        toDoLi.addEventListener("click", () => {
            console.log("hi")
            toDoInfo.classList.toggle("hidden");
        })
    });


}
