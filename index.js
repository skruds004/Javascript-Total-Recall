/******************* QUESTIONS **************************** 
* 1. How do we assign a value to a variable?
** We use the assignment operator (=)
* 2. How do we change the value of a variable?
** We also use the assignment operator (=) and can use +, -, /, *, etc. to perform operations on the variable
* 3. How do we assign an existing variable to a new variable?
** Using the assignment operator, EX) let newVar = existingVar;
* 4. Remind me, what are declare, assign, and define?
** Delcaration is registering the variable in its scope
** Assignment is giving a value to the variable
** Defining a variable is giving it a type
* 5. What is pseudocoding and why should you do it?
** Pseudocoding is planning out your code in informal language that is used to design your program before writing it
* 6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
** 50/50
*/

/**********************************************************
 * B. Strings
 **********************************************************/

let firstVariable = "Hello World";
firstVariable = 2;
let secondVariable = firstVariable;
secondVariable = "Goodbye World";
let yourName = "Ryan Hasler";
console.log("Hello, my name is " + yourName);
console.log(firstVariable);

/*********************************************************
 * C. Booleans
 *********************************************************/

const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false || false || false || false || false || true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a < b + c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a != a + d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');
