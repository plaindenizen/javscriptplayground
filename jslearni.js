//Starting here with the W3schools JS tutorial.
//Javascript is one of the three languages web developers must learn.
//HTML defines the content. CSS specifies the layout. Javascript to program the behaviour.

//Javascript can change HTML content attributes, styles. 
//any number of JS scripts can be placed in an HTML document. In either <body> or <head>, or both. 
//JS scripts can also be placed into an HTML document using the <script> tag. This is useful when the same JS script is needed across multiple web pages.
//An external script can be referenced in 3 different ways. Full URL link, file path, and no file path.


//A funtion is a block of code than can be executed when 'called' for.
//

//W3schools JS exercise.
// let carName = 'Volvo';

// let x, y, z;    //statement 1
// x = 5;          //statement 2
// y = 6;          //statement 3
// z = x + y;      //statement 4


//This can be written in one line using commas like so.
// let x = 5, y = 6, z = x + y;

// console.log(z)

// x = 10, y = 6;
// x += y;     //x is now 16
// console.log(x)

//the += (addition assignment operator) performs addition on the two operands and assigns the result to the left operand.
//other math can be done using multiplication assignment operator, division assignment operator, subtraction assignment operator.


// let length = 16;            //this data type is a number
// let lastName = "johnny";    //this data type is a string
// const x = {
//     firstName: 'john',
//     lastName: 'doe'
// };                          //this data type is an object


//executing a function (that has already been declared) can be as simple as simply calling for it on its own like so

// function myFunction() {
//     console.log("Hello world");
// }

// myFunction()    //this prints "Hello World" in the terminal

// function myFunction() {     //anything contained within the smooth brackets after the name of the function is a parameter
//     return "Hello";         //anything contained within the curly brackets after a function is an object
// }

// myFunction()    //unlike previous function this one is missing console log in the function and so wont print anything unless specified outside of the function
// console.log(myFunction())   //this line prints "Hello" in terminal


// function myFunction(world = "World") {
//     return " Hello" + world;
// }   //statements contained within a function may call upon the parameter of their function.

// console.log(myFunction())


// const person = {
//     myName:     "Jacob",
//     lastName:   "Barber"
// };

// console.log(person.myName,person.lastName)

// let s1 = "going to ";
// let s2 = "the store ";
// let s3 = "my house ";

// a = s1+s2   
// b = s1+s3   //here is an example of cancatenation.

// console.log(a)
// console.log(b)

// let s1 = "going to ";
// let s2 = "the store ";
// let s3 = "my house ";

// console.log(s1.concat(s2))  //here is an example of cancatenation.

// sent = "I went boxing a zebra seaside fairy heights"

// console.log(sent.toUpperCase())     //toUpperCase method converts all character sin a string to capitals. toLowerCase converts to lower case.

// const para = "I was walking until I died";
// console.log(para.replace("until", "because"));      //replace function creates a new string by takeing a specified piece of a string and replaces it with more specified text.

// console.log(para.toUpperCase())                     //another toUpperCase use example


//SECTION - Arrays

// const myItems = ['car', 'xylophone', 'GPS']
// myItems[0] = 'truck'

// console.log(myItems)

// console.log(myItems.length)     //length data property represents the number of elements in a given array

// myItems.length = 5;     //length can be invoked to modify the length of an array. In this case it simply adds two empty items.

// console.log(myItems)

//ANCHOR - Prompt test
// let sign = prompt("who are you?");

// const readline = require('readline')

// const r1 = readline.Interface({     //NOTE - 'require' is a global method that allows us to import external modules into nodeJS.
//     input: process.stdin,
//     output: process.stdout
// })

// r1.question('whats your name?', (answer) => {
//     console.log(answer.concat(' is your name'))
//     process.exit()      //if process.exit is left out user is stuck in terminal
// }) 

// sequence2 = 'after breakpoint string'
// console.log(sequence2)

//ANCHOR - 16-04-2024
const guy = {
    fName: john='john',
    height: 5.8,
    age: 1,
    things: ['gun','bicycle',5,'battery']
}
let popped = guy.things.pop()    //pop method takes the last element of an array and returns it.
guy.things.push(popped)          //push method adds another element to an aexisting array.
guy.things.splice(3)             //splice method removes a specified element(s) from an existing array. 
guy.things.sort()                //sort method sorts an array of strings alphabetically. integers are sorted before strings.

function guyprinter() {
    console.log(guy.fName)
    console.log('mans age is ' + (guy.age))
    console.log(guy.height)
    console.log(guy.things)
    console.log('amt of things on this man is ' + (guy.things.length))
}

guyprinter()
const d = new Date();
year = d.getFullYear();           
console.log(year)

// console.log(guy.fName,guy.age, guy.things.length)

function termRule() {
    console.log("------------------------------")
}

termRule()

//ANCHOR - JS Math methods
x = Math.max(10,20)
console.log(x + " is the larger of 10, 20")

y = Math.round(3.14)
console.log(y + " is rounded from 3.14")

z = Math.sqrt(9)
console.log(z + " is the square root of 9")

termRule()

//ANCHOR - Comparisons
let w = 10;
let l = 5;
console.log(w>l)        //greater than ">" operand returns true if left operand is greater than rigth operand. otherwise returns false. strings can also be compared.

l = 10;                 //NOTE - if a variable is supposed to be changing throughout the code then it must be declared with 'let'.
console.log(w == l)     //equality "==" operator checks both operands for equality. operands may be different data types(eg 1 and '1' would return true). This line should return true.

console.log(w!=l)       //inequality operator checks whether its two operands are equal or not and returns a boolean.

let age = 23;
let votable = (age<18) ? "Too young":"Old enough";  //NOTE - conditional ternery operator '?' takes 3 operands. Firstly the condition, followed by the operator, an expression if true, and an expression if false. True and false expressions are seperated by a colon.
console.log(votable);

termRule()

//ANCHOR - Conditions
if (age>18) {
    console.log("I am older than 18")
}

if (age>l) {
    console.log("I am older than 10");
} else {
    console.log("I am not older than ")
}

//ANCHOR - Switch
