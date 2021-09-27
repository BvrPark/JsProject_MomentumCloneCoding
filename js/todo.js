const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //setItem("key", value)형태로 데이터 저장
    //JSON.stringify() 어떤 object든 array든 무조건 string의 형태로 바꿔주는 것
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);       //li태그안에 span태그 추가
    li.appendChild(button);     //button을 li의 마지막에 추가
    toDoList.appendChild(li);   //toDolist에 li태그 추가
    
}

function handleToDoSubmit(event){
    event.preventDefault();     //submit하고 새로고침 중지
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos); //parse는 array의 형태로 변형시켜준다.
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);  
    //forEach는 array의 각 item에 대해 function을 실행하게 해준다.
}
