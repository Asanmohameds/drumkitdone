// Last class we have seen addEventListener function its looks weired so we are goinf to see littile bit detail.

/* -----Defintion----- Higher order functions are functions that can take other functions as input.-----*/

//these function not available on all languages, only on JS, swift, rebel etc..

/* In addEventListenerAll its has two inputs, one is what want to listen and
another input what to do once listened by function.  In this actually we are passing the
function as an input.   */

// --------example check in google chrome tool below code.

function add (num1, num2) {
  return num1 + num2;
} //now if we called this funciton by calculator(2,3) then we would get output as 5.

//now if we want to multiply both numbers then we have to write the code again

function multiply(num1, num2){
  return num1 * num2;
}// now we get output as 6.

//this is not good idea also little bit painfull always chaning code for each operator, solution is passing the function

function bigCalculator (num1, num2, operator){ // this operator can be changed on fly. when it get called.
  return operator(num1, num2);
}

/*Now we called the bigCalculator function by bigCalculator(5,10, add); then output is 15..we and so on.  */
