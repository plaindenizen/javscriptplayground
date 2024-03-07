//NOTE - 
/*
const, let and var are commands that declare variables. They have different effects. Let variables are allowed to be changed. Const variables are not allowed to be changed.
Const and let are more commonly used nowadays.
Its a good idea to stick to one for consitency sake Variables containing integers can be added together for basic addition.
When troubleshooting errors in code, going through and highlight them with note function can help.
In Javascript, anything inbetween two "()" brackets is considered a 'method'
*/
const pi = 3.14
//pi= 10 (runing this line will display an error message)
console.log(pi)

let num2 = 20
//num2= 25 (running this line is allowed) if no number is defined to let variable it will simply output 'undefined'
console.log(num2)

var num3 = 30
console.log(num3)

const fullname = 'jacob barber'

const workplace = 'nmit'

console.log(fullname + ' ' + workplace) //concatenation

console.log(`my full name is ${fullname} and i work at ${workplace}`)

const working = true
const notworking = false

if(working) {
    console.log(fullname)
}

let a = 2
let result

if (a > 0) {
    result = 'positive';
    console.log(result)

} else {
    result = 'NOT positive';
}
return result;
//