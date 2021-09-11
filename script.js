const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    console.log("title was clicked!");
}
title.onclick = handleTitleClick;
title.addEventListener("click", handleTitleClick);

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy(){
    alert("copier!");

}
function handleWindowOffline(){
    alert("SOS no WIFI");
}
function handleWindowOnline(){
    alert("ALL GOOOOOD");
}
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);