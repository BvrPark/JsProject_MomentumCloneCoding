const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    // 어떤 이벤트의 기본행동이든지 실행되지 않게 막음
    // 여기에선 form에서 클릭이나 엔터를 입력할시 페이지가 새로고침되는 것을 막음
    
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    
    localStorage.setItem(USERNAME_KEY, username);
    //데이터베이스와 같은 기능
    //""안은 key값 ,뒤에는 value값
    
    paintGreetrings(savedUsername);
}

function paintGreetrings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    //show the greetings
    paintGreetrings(savedUsername);
   
}