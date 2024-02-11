export function toDoDisplay(array) {
    const content = document.querySelector("#content");

    const homeContent = document.createElement("div");
    content.append(homeContent);

    const homeList = document.createElement("ul");
    homeContent.append(homeList)

    array.forEach(obj => {
        const toDoLi = document.createElement("li");
        homeList.append(toDoLi)
        
        const toDoBtn = document.createElement("button");
        toDoBtn.innerText = obj.title;
        toDoLi.append(toDoBtn)

        const toDoInfo = document.createElement("div");
        toDoInfo.innerText = obj.title;
        toDoInfo.classList.add("hidden");
        content.append(toDoInfo);

        toDoBtn.addEventListener("click", () => {
            toDoInfo.classList.toggle("hidden");
        })
    });


}
