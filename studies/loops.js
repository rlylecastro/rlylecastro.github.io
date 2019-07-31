//Loops
//  It's often useful to make code run multiple times. Rather than having to write out the code for each time you want it
//  to run, you can set it up as a loop instead. Three of the most common flavors of loop are while, for, and for-in loops.

//Explain while, for, and for-in loops

//while loop
    //while loops are useful in situations where you want code to run until a certain condition is met.
    //just make sure that your end condition actually will be met, otherwise you can set up an infinite loop.
var x = 0;
//[keyword]  [boolean expression] 
  while      (x < 10)             { 
//[code block to run while boolean expression is true]
    console.log(x);
    x++;
}

//for loop
    //for loops are useful when you want code to run for a specified number of times. An example would be when you
    //want something to happen for each element in an array.
//[keyword] [variable initialization; boolean expression; incrementer]
for         (let i = 0; i < 5; i++) {
//[code block to run while boolean expression is true]    
    console.log(i); //prints 0 1 2 3 4 5
}

//for-in
//for-in loops are used to loop over objects
let obj = {
    street: 'Magazine St',
    city: 'New Orleans',
    state: 'Louisiana'
};
//[keyword] [variable intialization <in> [object over which to loop]]
for (let key in obj) {
    //for-in loops will perform the action in the code block for each key-value pair in the object
    console.log(obj.key); //prints the values corresponding to each key in obj
}

//Be able to loop any number of times, forward counting up to some limit, backward counting down to 0
//forward counting loops displayed above. Backward counting loops are similar

for (let i = 5; i > -1; i--) {
    console.log(i); //prints 5 4 3 2 1 0
}

//Loop over an Array, forwards and backwards
let arr = [2, 4, 6, 8, 10];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // prints 2 4 6 8 10
}

for (let i = arr.length - 1; i > -1; i--) { //remember that the last term in an array is array.length - 1
    console.log(arr[i]); //prints 10 8 6 4 2
}
//Loop over an Object
//see for-in example above

//Infinite loops can occur if the boolean expression that defines the loop's end condition never becomes true.
//One example of an infinite condition would be:
//for (let i = 0; i > 5; i--);
//In short, remember which way you're going!