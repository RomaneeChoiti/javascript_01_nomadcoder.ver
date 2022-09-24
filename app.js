// return. 1

const age = 78;
function calculateKrAge(ageOfForeigner){
    ageOfForeigner + 2;
    return "hello";
} 

const krAge = calculateKrAge(age)

console.log(krAge); 


// return. 2

const calculator ={
    add: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    times: function (a, b){
        return a * b;
    },
    divide: function(a, b){
        return a / b;
    },
    squared: function(a, b){
        return a ** b;
    },
};
const addResult = calculator.add(2, 3);
const minusResult = calculator.minus(addResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, addResult);
const squaredResult = calculator.squared(divideResult, minusResult);
 
// recap. 1
const calculator = {
    add: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    times: function (a, b){
        return a * b;
    },
    divide: function(a, b){
        return a / b;
    },
    squared: function(a, b){
        return a ** b;
    },
};

const addResult = calculator.add(2, 3);