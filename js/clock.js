const clock = document.querySelector("h2#clock");

function sayHello(){
    console.log("hello");
}

setInterval(sayHello, 5000);
// setInterval(호출할 함수이름, 호출할 간격(ms))