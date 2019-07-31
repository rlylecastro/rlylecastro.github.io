/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;
let myAge;
const myEyeColor = 'blue'; //you must assign a const at the time of declaration, because consts can't be reassigned


/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john
//variable declaration is hoisted, but assignment is not. If you call a variable on a line above which it is assigned, the variable will exist, but will return undefined

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

//const myEyeColor = 'brown'; //throws a parsing error: myEyeColor has already been declared

//Below is a function illustrating the difference between var, let, and const. Key takeaways include:
// -declarations made with var are hoisted, but declarations made with let and const are not
// -let and const variables are scoped to the block they are created, but var variables are scoped to their encompassing function

function testingVarLetConst() {
	//var
	if (1 === 1) {
		console.log(`i = ${i} before declaration & assignment`)
		i = 10;
		console.log(`i = ${i} before declaration`);
		var i = 15;
		console.log(`i = ${i} after declaration & assignment`);
	}
	console.log(`i = ${i} outside block in which it was declared`);
	//let
	if (1 === 1) {
		let j;
		console.log(`j = ${j} before declaration & assignment`)
		j = 20;
		console.log(`j = ${j} before declaration`);
		j = 25;
		console.log(`j = ${j} after declaration & assignment`);
	}
	//console.log(`j = ${j} outside block in which it was declared`);
	//const
		const k = 0;
		if (1 === 1) {
		console.log(`k = ${k} before declaration & assignment`)
		//k = 30;
		console.log(`k = ${k} before declaration`);
		//k = 35;
		console.log(`k = ${k} after declaration & assignment`);
	}
	//console.log(`k = ${k} outside block in which it was declared`);
}

testingVarLetConst();