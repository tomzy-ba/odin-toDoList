export function toDoDisplay(array) {
    const content = document.querySelector("#content");

    const homeContent = document.createElement("div");
    content.append(homeContent);

    const homeList = document.createElement("ul");
    homeContent.append(homeList)
    array.forEach(obj => {
        const toDoItem = document.createElement("li");
        toDoItem.innerText = obj.title;
        homeList.append(toDoItem)
    });


}
