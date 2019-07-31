//Operators
/* Operators act on data. Different types of operators do different things, as detailed below.
*/

//Assignment operators 
//  assign values to data. The siplest assignment operator is the familiar =, but here are some others
//  and what they do.
var a = 1;
a += 2; //short for a = a + 2
a -= 5; //short for a = a - 5
a *= 3; //short for a = a * 3
a /= 2; //short for a = a / 2
a %= 4; //short for a = a % 4

//Arithmetic operators
//  perform mathematical operations on numbers.
//  Note: when used on strings, + does not perform addition but rather concatenation
1 + 1; //2
'1' + '1'; //11
1 - 1;
3 * 3;
4 / 2;
5 % 3;//returns the remainder of 5 / 3

//Comparison operators
//  compare two values. An expression involving a comparison operator will evaluate as a boolean.
2 > 1; //evaluates true
2 < 1; //evaluates false
3 === '3'; //strict comparison, evaluates false
3 == '3'; //non-strict comparison, evaluates true. Don't use this without a good reason

//Logical operators
//  perform the function of logical AND, OR, and NOT
true && false; //logical 'and', evaluates false
true || false; //logical 'or', evaluates true
!true; //bang operator, flips the boolean value, evaluates false in this case

//Unary operators (!, typeOf, -)
    //Note that assignment, arithmetic, comparison, and logical operators are used with two values.
    //These unary operators only involve a single value.
var num = 1;
var str = 'a';
var obj = {};
var arr = [];

//! bang operator, see above

//typeof - returns the type of a given variable, but has some quirks, e.g. arrays and Dates are considered objects

//- turns positive numbers into negative numbers

//Ternary operator (a ? b : c)

//in the above example, a is a conditional statement, b is the code that executes if a is true, and c is the code that executes if a is false

function isPositive(num) {
    return (num > 0 ? 'This number is positive' : 'This number is not positive');
}

isPositive(1);
isPositive(-1);