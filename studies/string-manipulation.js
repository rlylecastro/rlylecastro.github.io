//String manipulation
//Strings are great, but what if you want to do more with those strings? Here are some ways to manipulate strings
//  to make new strings.

//With operators
var greeting = 'Hello';
var person = 'Lyle';
//when the + operator is used with strings, it acts as concatenate, combining the strings together

var personalGreeting = greeting + ' ' + person;

//With string methods
//strings have some of the same properties as arrays, e.g. they are zero indexed and have the length property

console.log(greeting.toUpperCase()); //converts all characters to uppercase

console.log(greeting.toLowerCase()); //converts all characters to lowercase

console.log(greeting[0]); //prints the character at index 0, 'H'

console.log(greeting.replace('ello', 'i')); //replaces the first instance of 'ello' with 'i', resulting in 'Hi'.

console.log(greeting.slice(1, 3)); //prints 'ell', i.e. the portion of the string beggining at index 1 and ending at index 3

console.log(greeting.repeat(3)); //prints 'HelloHelloHello';