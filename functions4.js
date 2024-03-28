//create a function that takes two numbers and a math operator (+ , - , / , *) and will perform a calculation with the given numbers.
//Cal(2, "+", 3) the output is 5

// function calNum(num1, operator, num2) {
//     if(operator == '+') return num1+num2
//     if(operator == '-') return num1-num2
//     if(operator == 'x') return num1*num2
//     if(operator == '/' && num2 !=0) return num1/num2
//     else return "Can not divide by 0!"
// }

// console.log(calNum(3, 'x', 100))

//use switch instead of if statements

// function calnum3(num1, operator, num2) {
//     switch(operator) {
//         case '+':
//             return num1+num2
//         break;
//         case '-':
//             return num1-num2
//             break;
//         case 'x':
//             return num1*num2
//             break;
//         case '/':
//             return num1/num2
//             break;
        
//         default: return false
//         break;
//     }
// }

// console.log(calnum3(1, '+', 3))

//rewrite the code above in ES6

// const calNuma = (num1, operator, num2) => operator+num2 === "/0" ? "Can not divide by 0!" : eval(num1+operator+num2)

// console.log(calNuma(3, 'x', 100))

//create an array, rotate the values clockwise by 1
//the last value is going to be the first value
//rotatearray([20,15,26,22,30]) -> [30,20,15,26,22]

// function rotateArray([20,15,26,22,30]) {

// }

// create a function that takes a given date (3/26/2024) return the day of the week as a string.

// function getDayName(day) {
//     const days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
//     let date = new Date(day)
//     return days[date.getDay()]
// }

// create a function that can take a flat array and change it to a nest arrays to represent an incremental depth level.

//Ex nestArray([1,2,6,3]) -> [1, [2, [6, [3]]]]

// function nestArray(arr) {
//     if(arr.length == 1) return arr
//     let temp = []
//     for(let i =0; i < arr.length; i++) temp.push(arr[i])
//     return [arr[0], nestArray(temp)]
// }

//ES6

// const nestArray2 = arr => arr.length === 1 ? arr : [arr[0], nestArray2(arr.slice(1))]
// console.log(nestArray2([1,2,3]))

//create a function that takes two dates and returns the number of days between the first and second date.
/* getNumbers(
    new Date("March 26 2024"),
    new Date("March 30 2024")
) */

//output -> 4days

//ES6 (provide inline comments for code)
// const getDays = (date1,date2) => {
//     return new Date(date2 - date1).getDate() -1
// }

// console.log(getDays(new Date ("march 26 2024")),(new Date("March 30 2024")))

