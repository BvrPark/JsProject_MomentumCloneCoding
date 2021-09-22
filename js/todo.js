const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");


function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.vaule;
    toDoInput.vaule = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);