//object 복습 


const player = {
    name: "choiDot",
    age: 98,
    job: "goodjob",
};
console.log(player);
//property 바꾸기
player.name = "choiGood";
player.job = "veryGoodJob"
console.log(player);
//property 추가하기
player.home = "veryGoodXi";
console.log(player);

//function 복습
function plus(potato, salad){
    console.log(potato + salad);
}
plus(5000, 7000);

//add, minus, divide, squared 만들기.
const calculator ={
    add: function(a, b){
        console.log(a + b)
    },
    minus: function(a, b){
        console.log(a - b)
    },
    divide: function(a, b){
        console.log(a / b)
    },
    squared: function(a, b){
        console.log(a ** b)
    },
};
calculator.add(3, 3);
calculator.minus(3, 3);
calculator.divide(3, 3);
calculator.squared(3, 3);