import { storeArrays } from "./toDoClass";
export function display(array) {
    const content = document.querySelector("#content");
    content.innerHTML = "";


    array.forEach((obj, index) => {
        const toDoDiv = document.createElement("div");
        content.append(toDoDiv)

        const divTitle = document.createElement("h3")
        divTitle.innerText = obj.title;
        divTitle.classList.add("divTitle");
        toDoDiv.append(divTitle);
        
        
        const toDoInfo = document.createElement("div");
        toDoInfo.classList.add("hidden");
        toDoDiv.classList.add("toDoDiv")
        toDoDiv.append(toDoInfo);

        for (const property in obj) {
        const toDoSummary = document.createElement("div");
        toDoInfo.append(toDoSummary);

        const propertyTitle = document.createElement("h4");
        propertyTitle.innerText = property;
        toDoSummary.append(propertyTitle);

        const propertyValue = document.createElement("span");
        propertyValue.classList.add("propertyValue")
        propertyValue.innerText = obj[property];
        toDoSummary.append(propertyValue);

        propertyValue.addEventListener("click", () => {
            let newProperty = prompt("Enter edit here");
            propertyValue.innerText = newProperty;
            obj[propertyTitle.innerText] = newProperty;
        });
        

        }

        divTitle.addEventListener("click", () => {
            toDoInfo.classList.toggle("hidden");
        })



        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete"
        toDoInfo.append(deleteButton);
        deleteButton.addEventListener("click", () =>{
            toDoDiv.remove(index);
            array.splice(index, 1)
            storeArrays();

        })

});
}