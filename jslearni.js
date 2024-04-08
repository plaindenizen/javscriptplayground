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

x = 10, y = 6;
x += y;     //x is now 16
console.log(x)

//the += (addition assignment operator) performs addition on the two operands and assigns the result to the left operand.
//other math can be done using multiplication assignment operator, division assignment operator, subtraction assignment operator.


let length = 16;            //this data type is a number
let lastName = "johnny";    //this data type is a string
const x = {
    firstName: 'john',
    lastName: 'doe'
};                          //this data type is an object