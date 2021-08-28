//object에 대한 설명
const player = {
    name: "nico",
    points: 10,
    fat: true,
};
console.log(player);
//object 수정
player.fat = false;
console.log(player);
console.log(player.name);
console.log(player["name"]);
//object에 새로운 것 추가
player.lastName = "potato";
