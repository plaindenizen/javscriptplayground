// const Arraysduplicatenumbers = arr => ()

// console.log(Arraysduplicatenumbers([1,2,3,4,5,6,1]))

// Create a function that takes an array of numbers or letters and returns a string.
//arraytostring([1,2,3,4,5]) -> "12345"

function arraytostring(arr) {
    let result = ""
    for(let i =0; i < arr.length; i++) {
        result = result + arr[i]
    }
    return result

}

console.log(arraytostring([6,7,"Ali","Sonny",10]))

//create a function that takes an array with integers, transform that array into a mirror.
//arraytomirror([0,2,4,6,8]) output -> [0,2,4,6,8,6,4,2,0]

// function arraytomirror(arr) {
//     for(let i = arr.length-2; i>0; i--) {
//         arr.push(arr[i])
//     }
//     return arr
// }

// //ES6
// //
// const tomirror = arr => [...arr, ...arr.reverse().slice(1)]

// console.log(tomirror([0,2,4,6,8]))

// //Create a function that returns the total number of arrays inside a given main array.
// //totalofarrays([[1,2,3],[4,5,6]]) -> total number of arrays = 2

// function totalofarrays(arr) {
//     let count = 0
//     for(let i=0; i < arr.length; i++) {
//         if(Array.isArray(arr[i])) {
//             count++
//         }
//     }
//     return count
// }

// console.log(totalofarrays([[1,2,3],[4,5,6]]))

//create a function that takes a number as an argument and returns an array of numbers
//counting down from the given number to zero.

//Ex: arraycountdown(5) output -> [5,4,3,2,1,0]

// function arraycountdown(arr) {
//     let array = []
//     for(let i = arr; i >=0; i--) {
//         array.push(i)
//     }
//     return array
// }

// console.log(arraycountdown(5))

// //ES6
// const countdownarray = (num) => Array.from(Array(num+1).keys()).reverse()
// console.log(countdownarray(10))
// // '=>' means 'function'