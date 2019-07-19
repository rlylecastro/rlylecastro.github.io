/* Control flow */

/*If
Else-if
Else */

let test = 0


if (test < 0) { //the expression in parenthesis ((test < 0) in this case) must resolve to a boolean value
    console.log('this number is negative')
} else if (test > 0) { //an if tree checks the if statements in order and runs the code corresponding to the first true statement. 
    console.log('this number is positive')
} else { //the else block is placed last. Note that it has no condition; it runs if no above condition is found to be true
    console.log('this number is neither positive nor negative')
}

//Switch
//switch statements can be easier to read when an if tree would have many branches. They behave the same as if-then-else statements
function colorSelector(color) {
    switch (color) {
        case 0 : return 'red'; //these conditions can still be read as boolean expressions, i.e. "in this case, (color === 0)"
        case 1 : return 'orange';
        case 2 : return 'yellow';
        case 3 : return 'green';
        case 4 : return 'blue';
        case 5 : return 'indigo';
        case 6 : 
        case 7 :
        case 8 :
            return 'violet'; //multiple values can be assigned to the same output like so
        default : return 'color not recognized'; //the default case is similar to the else statement in an if tree. It's what runs if no other condition is met
    }
}