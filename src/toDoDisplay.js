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

        toDoBtn.addEventListener("click", () => {
            
        })
    });


}
