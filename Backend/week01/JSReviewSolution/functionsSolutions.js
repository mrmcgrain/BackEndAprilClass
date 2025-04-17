const returnEmptyString = function () {
    return ""
};

const returnZeroNumber = function () {return 0};

const returnEmptyArray = function () {return []};

const returnEmptyObject = function () {return {}};

const returnAbcString = function (value) {return 'abc123'};

const returnSumOfTen = function (arg1, arg2) {return arg1 + arg2};

const subtraction = function (arg1, arg2) {return arg1 - arg2};

const multiplication = function (arg1, arg2) {return arg1 * arg2};

const division = function (arg1, arg2) {return arg1 / arg2};

const returnArray = function (arg1) {return arg1};

const returnFirstIndex = function (arg1) {return arg1[0]};

const returnSecondIndex = function (arg1) {return arg1[1]};

const returnArrayLength = function (arg1) {return arg1.length};

const arraySum = function (arg1) {
    let sum = 0
    for(let num of arg1){
        sum += num
    }
    return sum
};

const arraySubtraction = function (arg1) {
    let subtract = 0
    for (let num of arg1){
        subtract -= num
    }
    return subtract
};

const multiplicationArray = function (arg1) {
    let multiply = 1
    for(let num of arg1){
        multiply *= num
    }
    return multiply
};

const divisionArray = function (arg1) {
    let divide
    for(let num of arg1){
        if(divide === undefined){
            divide = num
        }else{
            divide /= num
        }
    }
    return +divide.toFixed(3)
};

const oddArray = function (arg1) {
    let odds = []
    for(let num of arg1){
        if(num % 2 !== 0){
            odds.push(num)
        }
    }
    return odds
};

const evenArray = function (arg1) {
    let even = []
    for(let num of arg1){
        if(num % 2 === 0){
            even.push(num)
        }
    }
    return even
};

module.exports = {
returnEmptyString,
returnZeroNumber,
returnEmptyArray,
returnEmptyObject,
returnAbcString,
returnSumOfTen,
subtraction,
multiplication,
division,
returnArray,
returnFirstIndex,
returnSecondIndex,
returnArrayLength,
arraySum,
arraySubtraction,
multiplicationArray,
divisionArray,
oddArray,
evenArray
}