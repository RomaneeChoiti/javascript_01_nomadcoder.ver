//conditionals part. 2
 
const age = parseInt(prompt("How old are you?"));

 if(isNaN(age)){
    console.log("please write a number");
 } else {
    console.log("Thank you for writing your age.")
 }
 

 //conditionals part. 3
 //음주 자판기
 
 const age = parseInt(prompt("How old are you?"));

 if(isNaN(age)){
    console.log("please write a number");
 } else if (age < 19){
    console.log("You are too young");
 } else {
    console.log("You can drink");
 }
 

//25~ 59세 사이, and(&&)연산자, or(||)연산자

 const age = parseInt(prompt("How old are you?"));

 if(isNaN(age) || age < 0){
    console.log("please write a real positive number");
 } else if (age < 25){
    console.log("You are too young");
 } else if (age >= 25 && age <= 50){
    console.log("Thank you write your age");
 } else if (age >= 51 && age <= 80) {
    console.log("You should exercise");
 } else if (age > 80) {
    console.log("You can do whatever you want.")
 } 

