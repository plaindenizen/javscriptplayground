//NOTE - 
/*
const, let and var are commands that declare variables. They have different effects. Let variables are allowed to be changed. Const variables are not allowed to be changed.
Const and let are more commonly used nowadays.
Its a good idea to stick to one for consitency sake Variables containing integers can be added together for basic addition.
When troubleshooting errors in code, going through and highlight them with note function can help.
In Javascript, anything inbetween two "()" brackets is considered a 'method'
*/
// const pi = 3.14
// //pi= 10 (runing this line will display an error message)
// console.log(pi)

// let num2 = 20
// //num2= 25 (running this line is allowed) if no number is defined to let variable it will simply output 'undefined'
// console.log(num2)

// var num3 = 30
// console.log(num3)

// const fullname = 'jacob barber'

// const workplace = 'nmit'

// console.log(fullname + ' ' + workplace) //concatenation

// console.log(`my full name is ${fullname} and i work at ${workplace}`)

// const working = true
// const notworking = false

// if(working) {
//     console.log(fullname)
// }

// let a = 2
// let result

// if (a > 0) {
//     result = 'positive';
//     console.log(result)

// } else {
//     result = 'NOT positive';
// }
// return result;
//
//SECTION - js arrays

//NOTE - arrays are a special type of object that can be accessed through numbers from zero up to N-1
arr = ['home', 111, 'cury', 222]
console.log(arr[1])
//NOTE - push(), pop()
//SECTION - push() adds a new item to the end of an array.
arr.push('Joe')
console.log(arr)

//SECTION - pop() removes an item from an array

let lastitem = arr.pop()
console.log(arr)

//ANCHOR - javascript for loop, the beat way to iterate any array mathmatically through for a loop

for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

//SECTION - add an item to the beggining of an array 
arr.unshift('apples')
console.log(arr)

//NOTE - remove an item from the begining of an array.
let firstitem = arr.shift()
console.log(firstitem)
console.log(arr)

//ANCHOR - javascript iterator
let a = [-5, -4, -3]
let b = 0
let c = [12, 13, 14]

//NOTE - concat() method whoch is used to join two or more arrays.
let result = a.concat(b, c)
console.log(result)

let numbers = [2,4,7,8,9]

let isEven = (num) => {
    if(num % 2 == 0){
        console.log(num + 'is even number')
        return
    } else {
        console.log(num + 'is odd number')
        return false
    }
}

// console.log(isEven{numbers})

console.log(numbers.every(isEven))

console.log(numbers.some(isEven))

for (let j = 0; < numbers.length; j++) {
    let temp = numbers[i]
    if ( temp % 2 == 0) {
        console.log(temp + ' is even number')
     } else {
        console.log(temp + 'is an odd number')
     }
    }
