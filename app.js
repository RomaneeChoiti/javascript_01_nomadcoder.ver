// 2 - 6 Objects

const player = {
    name: "nico",
    points: 100,
    fat: true,
};
//name만 따로 
console.log(player);
console.log(player.name);
console.log(player["name"])
//fat 수정하기
console.log(player.fat)
player.fat = false;
console.log(player)
//lastName 추가하기
player.lastName = "potato";
console.log(player)
// points 숫자 더하기
player.points = player.points + 100;
console.log(player)
