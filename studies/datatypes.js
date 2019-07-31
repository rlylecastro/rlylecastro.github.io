//Datatypes
/*
 * DATATYPES:
 *
 * 0. Different types of data require different data types to store. A person's age
 * can easily be expressed by a number, but a person's eye color less so. The type of data
 * a variable contains determines what can be done with that data.
 *
 * 1. To create a variable we use a keyword (var, let, or const) followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

//Number
//numbers can be integers or decimal numbers
var num1 = 5;
var num2 = 3.14;

//String
//strings can be any length of characters, bounded by single- or double-quotes, or with backticks ``
var str1 = 'a';
var str2 = "This is a longer string than the one above";
var str3 = `pi to 2 decimals is ${num2}`;

//Boolean
//true or false. often used for control flow, i.e. if-then-else trees and switch statements
var bool1 = true;
var bool2 = false;

//Array
//A zero-indexed grouping of any type or types of data, including objects or other arrays
//bounded by square brackets
var arr1 = [0, 1, 2, 3, 4];
//Arrays are zero-indexed, meaning the individual datapoints are stored in an index starting with 0.
//The values in the above arr1 correspond to their index locations. The number 0 can be accessed with arr1[0]
//Using the .length property, values from the end of the array can be accessed, 
//e.g. 4 can be accessed with arr1[arr.length - 1] (remember that the last index will be one less than
//the length because the index starts counting at 0)
var arr2 = ['first', 42, arr1];

//Object
//objects are collections of data stored in key-value pairs
//key-value pairs can be populated using dot or bracket notation
var obj1 = {};
obj1.nameFirst = 'Lyle';
obj1['nameLast'] = 'Castro';

//Function
//A function is a block of code that runs once it has been declared and called. Functions offer lots of flexibility versus repeating lines of code over and over

function add(num1, num2) { //here we declare the function add with the parameters num1 and num2
    return num1 + num2; //functions are defined by their return statements
}
add(2, 3); //once a function has been declared, it must be called before it does anything. Here, we are calling the add function with the arguments 2 and 3

//undefined
//if a variable is declared but not assigned a value, it defaults to undefined
//if a function has no return statement, it will evaluate as undefined
var x;
console.log(x); //undefined
function noReturn() {
    console.log('this function has no return statement');
}
console.log(noReturn()); //undefined

//null
//a value representing the intentional absence of a value
var nulValue = null;

//NaN
//Not a number - certain mathematical expressions resolve to NaN.
console.log(0 / 0); //NaN
console.log(Math.sqrt(-1)); //NaN

//Infinity and -Infinity (Google them if you don’t know!)
//Mathematical concepts illustrating expansion without bounds. Certain mathematical expressions resolve to +/- infinity
console.log(1 / 0); //Infinity

//What is the difference between primitive/simple and complex data types?
    //simple:
        //number, string, boolean, NaN, undefined, and null are simple data types
        //atomic and immutable - reassigning a simple variable just replaces the value; simple variables do not aggregate data
        //copied by value - when copying from one simple variable to another, a copy is created. Changing the original value has no effect on the copy, e.g.:
        var num3 = 5;
        var num4 = num3;
        num3 = 10;
        console.log(num3, num4); //num3 = 10, num4 = 5

    //complex:
        //arrays, objects, and functions are complex data types
        //these data types aggregate other datatypes and have indefinite size
        //copied by reference - when copying from one complex variable to another, the copy references ('points to') the original. Changing the orginal does affect the copy
        var arr3 = [0, 2, 4, 6, 8];
        var test = arr3[1];
        console.log(test); //test = 2
        arr3[1] = 2.5;
        console.log(test); //test = 2.5, because the value stored in arr3[1] changed
//Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different?
