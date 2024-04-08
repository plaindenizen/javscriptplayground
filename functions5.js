// create afunction that takes an array of stringified numbers as a parameter and return the numbers
// Ex : ["1","3","6.7"] -> [1,3,6.7]

// ES6
// let stringifier = arr => arr.map(e => +e)

// console.log(stringifier(["1","3","6.7"]))

//ES5

function arraymabob(arr) {
    let temp = []
    for(let i = 0; i< arr.length; i++) {
        temp[i] = JSON.parse(arr[i])
    }
    return temp
}

console.log(arraymabob(["1","3","6.7","37"]))
console.log(["1","3","6.7","37"])   //strings are always printed with their respective quotation marks in the terminal.

//console.log() must always contain those brackets to print anything 

// create a function that returns (true) if all parameters are truthful and false otherwise.
//Ex. checkParam(true, true, true) -> true
// checkParam(5,1,3, 0) -> flase
//false values are: false, 0 and ""

// function checkParam([true,true,true]) {
//     let temp []
//     for(let i)
// }

// function checkParam(arr) {
//     let value = false
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] !==0 && arr[i] !== false && arr[i] !== "") {
//             value = true
//         }
//     }
//     return value
// }
// console.log(checkParam(5,1,3,1))

// function checkParamthree(param1,param2,param3,param4) {
//     if(param1 && param2 &&param3 && param4) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log()

//create a function to check if an array contains a particular number.
//Ex: checkArray([5,5,6], 5) -> true
//Ex: checkArray([1,3,5,7,10],2) -> false

//ES6
// const checkArray = (arr,el) => {
//     return arr.includes(el)
// }

// console.log(checkArray([]))
