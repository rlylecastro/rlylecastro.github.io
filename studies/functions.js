//Functions
//The two phases to using functions: First we must ___? Next we can execute (or two other words for executing a function?) a function by?
//First we must declare a function, then we can call it. Other words for calling a function are executing, invoking, applying, and running. 

//What’s the difference between a function’s parameters and arguments PASSED to a function?
//Parameters are the placeholder variable names we use when we declare a function, whereas
//Arguments are the values we pass to the function when it is being called

//What’s the syntax for a NAMED function?
function example(parameter1, parameter2) { //this function is called example, and has the parameters paramater1 and parameter2
    return `As of this calling, the function example was passed the arguments ${parameter1} and ${parameter2}`;
}
//lines 10-12 are the function declaration

console.log(example(100, 'sesame')); //this line is calling the function

//How do we assign a function to a variable?
//It's the same as assigning any other datatype to a variable
var myVar = example(1, 2);

//Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify inputs, and how do we specify outputs?
//Functions take their parameters as inputs, and their return statements are outputs

//Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
var globalVar = 1;

function scopeChecker() {
    var localVar = 2;
    console.log(globalVar, localVar); //this works fine
}
//console.log(globalVar, localVar); //this does not; localVar isn't accessible here

//Closures: Functions form closures around the data they house. If an object returned from the Function and is held in memory somewhere (referenced), 
//that closure stays ALIVE, and data can continue to exist in these closures! (See: our meeting-room app for an example!)
function add(num1, num2) {
    return num1 + num2;
}

function print(value) {
    console.log(value);
}

print(add(2, 2)); //this is closure because print has access to the parameters of num1 + num2 via add's return statement

//Functions can be assigned to a variable, just like any other data type.
var pizza = function(crust, toppings, price) {
  //do something useful with parameters passed
  //return something, optionally
};
