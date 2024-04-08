// function greeting() {
//     return console.log('hello world')
// }

// console.log(greeting())

// //NOTE - write a function that adds any two numbers and return the result.

// seq = [1,2,3]

function test() {
    return (seq(1) + seq(2));
}

console.log(test([1,2,3]))

// write a function that takes an array and checks whether the sum of its elements is even or odd, the value should return 'even' or 'odd'

// function checkarraysum(arr) {
//     let sum = 0
//     for (i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }

//     if(sum%2 == 0 ) {
//         return 'even'
//     } else {
//         return 'odd'
//     }
// }

// console.log(checkarraysum([0, 1, 5]))

// //SECTION - write a function that is an array of items and returns only integers
// //['ali', 3, 'isaac', 5, 9] -> [3, 5, 9]
// arr = ['ali', 3, 'isaac', 5, 9]

// arr = ['ali', 3, 'isaac', 5, 9, 27]
// funnylist = ['lia', 2, 'casi', 10, 4]

// function wordwrecker(word) {    //'word' here is a 'parameter'
//     let integer = []
//     for (let i =0; i <funnylist.length; i++) {   //arr here is just name of variable. It is not a specific bit of syntax or whatever.
//         if(Number.isInteger(funnylist[i])) {
//             integer.push(funnylist[i])
//         }
//     }
//     return integer
// }

// console.log(wordwrecker(arr))   //second brackets here after wordwrecker can be emmpty. exisiting arrays can be put there but will be overwritten by wordwrecker function.

// create a function that takes two strings (p1 and p2) as arguments and returs a string stating the winner (rock,paper or scissors)

//NOTE - game conditions
//if p1 wins return the string "the winner is p1"
//if p2 wins return the string "the winner is p2"
//if the y are the same then return "it's a draw"
//using trpile '=' makes it refer to the the exact type of variable; a 5 as an integer can't be mistaken for one used in a string
// function rps(p1, p2) {
//     if(p1 === p2) return 'Its a draw'

//     else if (p1 === 'Rock' && p2 === 'Scissors') return 'the winner is p1'
//     else if (p1 === 'Paper' && p2 === 'Rock') return 'the winner is p1'
//     else if (p1 === 'Scissors' && p2 === 'Paper') return 'the winner is p1'

//     else return "the winner is p2"
// }

// console.log(rps('Scissors', 'Scissors'))

// && syntax is used to combine
// if atatements can use ? syntax

//ANCHOR - Javascript built in functions.
// function rpsTwo(p1, p2) {
//     let obj = {
//         Rock: 'Scissors',
//         Scissors: 'Paper',
//         Paper: 'Rock'
//     }
//     return p1 === p2 ? "It's a draw" : obj[p1] === p2 ? "the winner is p1" : "The winner is p2"
// }

// console.log(rpsTwo('Rock', 'Rock'))


// //ANCHOR - JS built in function includes
// function rpsThree(p1, p2) {
//     const wins = ['RockScissors', 'PaperRock', 'ScissorsPaper']
//     return p1 === p2 ? "It's a draw" : `the winner is ${wins.includes(p1 + p2) ? 'p1' : 'p2'}`
// }

// console.log(rpsThree('Scissors', 'Paper'))
