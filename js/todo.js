const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    toDoList.appendChild(li);   //toDolist에 li태그 추가
    li.appendChild(span);       //li태그안에 span태그 추가
    span.innerText = newToDo;
}

function handleToDoSubmit(event){
    event.preventDefault();     //submit하고 새로고침 중지
    const newToDo = toDoInput.vaule;
    toDoInput.vaule = "";
    paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);