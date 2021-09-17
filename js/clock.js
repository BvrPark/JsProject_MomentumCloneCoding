const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    // padStart(a,b)
    // a : string형으로 지정할 길이
    // b : string형의 길이가 a만큼이 되지않으면 string형 앞에 b를 추가
    // padEnd(a,b)
    // 다른것은 padStart와 똑같고 b를 뒤에 추가
    
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
// setInterval(호출할 함수이름, 호출할 간격(ms))


