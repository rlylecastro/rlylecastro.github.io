/* Control flow
    You don't always want all of your code to run under any circumstance. Sometimes you want some of your code to run
    only under certain conditions. Control flow is the structure used to dictate when and why a given block of code runs.
*/

/*If | Else-if | Else
    An if/else-if/else tree is a standard way to structure what code runs when. The structure begins with 
    the keyword if, followed by an expression that resolves to a boolean. If the expression resolves true, the following code
    block will execute, if not, the interpreter moves onto the next else-if, which again will run depending on how its
    boolean expression resolves, and so on. The interpreter checks the conditions of the if / else-if statements in order, so
    if more than one is true, the first one encountered will be the code that executes.
    
    If none of the conditions are true, the code in the else block will run. Note that the else block does not have an associated
    boolean expression, and can be thought of as a default action to take assuming all other conditionals are false.
*/
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