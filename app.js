 //function part. 1
 function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
 }

 sayHello("ChoiDot", 10);
 sayHello("KimDot", 23);
 sayHello("HanDot", 34);
 
//function part. 2

 function plus(firstNumber, secondNumber){
    console.log(firstNumber +  secondNumber);
 }

 function divide(firstNumber, secondNumber){
    console.log(firstNumber / secondNumber);
    //function 안에서 쓰면 오류안남.
    console.log(firstNumber);
}
//function 밖에서 쓰면 오류남.
//console.log(firstNumber);

 plus(10, 10); 
 divide(10, 10);
 
 //나만에 function, object 만들기
 const player = {
    name: "nico",
    age: 30,
    sayHello: function(otherPersonsName){
        console.log("hello! " + otherPersonsName + " nice to meet you!")
    }
 }
 player.sayHello("ChoiDot");
 player.sayHello("KimDot");