const images = [
    "0.jpg", "1.jpg", "2.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
//createElement("h1") : html파일에 <h1></h1>과 같은 코드를 생성

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
//document.body.appendChild() : body에 ()안의 요소를 html파일에 body마지막 부분에 추가
//insertBefore(새로운노드, 참조할 노드) : 원하는 곳에 추가하고 싶으면 appendChild대신에 insertBefore을 쓸수도 있다.