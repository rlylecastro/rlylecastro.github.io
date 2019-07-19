//Loops
//Explain while, for, and for-in loops

//while loop
var x = 0;
while (x < 10) { //the statement in parenthesis is the condition that ends the loop
    console.log(x);
    x++;
}
//when using a while loop, make sure your end condition will be met; otherwise you've created an infinite loop

//for loop
for (let i = 0; i < 5; i++) {
    console.log(i); //prints 0 1 2 3 4 5
}

//for-in
//for-in loops are used to loop over objects
let obj = {
    street: 'Magazine St',
    city: 'New Orleans',
    state: 'Louisiana'
};

for (let key in obj) {
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