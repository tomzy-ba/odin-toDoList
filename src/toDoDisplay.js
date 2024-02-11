export function toDoDisplay(array) {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const homeContent = document.createElement("div");
    content.append(homeContent);

    array.forEach(obj => {
        const toDoDiv = document.createElement("div");
        toDoDiv.innerText = obj.title;
        homeContent.append(toDoDiv)
        
        const toDoInfo = document.createElement("div");
        toDoInfo.classList.add("hidden");
        toDoDiv.append(toDoInfo);

        for (const property in obj) {
        const toDoSummary = document.createElement("div");
        toDoInfo.append(toDoSummary);

        const propertyTitle = document.createElement("h3");
        propertyTitle.innerText = property;
        toDoSummary.append(propertyTitle);

        const propertyValue = document.createElement("span");
        propertyValue.innerText = obj[property];
        toDoSummary.append(propertyValue);

        }

        toDoDiv.addEventListener("click", () => {
            toDoInfo.classList.toggle("hidden");
        })
    });


}
