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

  /*****************************************************
   * D. The Farm
   ****************************************************/

  let animal = "cow";
  if(animal === "cow") {
    console.log("moooooo");
  }
  else {
    console.log("Hey! You're not a cow!");
  }

/*****************************************************
* E. Driver's Ed
****************************************************/

let age = 17;
if (age >= 16) {
    console.log("Here are the keys!");
}
else {
    console.log("Sorry, you're too young.");
}

//////// II. LOOPS //////////////////////////////////////////////////////////////////
/*****************************************************
* A. The Basics
****************************************************/

// for(let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// for(let i = 10; i <= 400; i++) {
//     console.log(i);
// }

// for(let i = 12; i <= 4000; i += 3) {
//     console.log(i);
// }

/*****************************************************
* B. Get Even
****************************************************/

// let str = "";
// for(let i = 1; i <= 100; i++) {
//     str = i;
//     if(i % 2 === 0) {
//         str += " <-- is an even number";
//     }
//     console.log(str);
// }

/*****************************************************
* C. Give Me Five
****************************************************/

//zero is technically a multiple of every number
// for(let i = 0; i <= 100; i++) {
//     if(i % 5 === 0) {
//         console.log("I found a " + i + ". High five!");
//     }
//     if(i % 3 === 0) {
//         console.log("I found a " + i + ". Three is a crowd");
//     }
// }

/*****************************************************
* D. Savings Account
****************************************************/

// let bank_account = 0;
// for(let i = 1; i <= 10; i++) {
//     bank_account += i;
// }
// console.log(bank_account);
// //spent my money
// bank_account = 0;
// for(let i = 1; i <= 100; i++) {
//     bank_account += i*2;
// }
// console.log(bank_account);

//////////// III. Arrays & Control Flow //////////////////////////////////
/*****************************************************
* A. Talk about it
* 1. What are the things in an array called
** Elements
* 2. Do Arrays guarantee those things will be in order?
** No
* 3. What real life thing could you model with an array
** A waiting list
****************************************************/

/*****************************************************
* B. Easy Does it
****************************************************/
const quotes = ['I love boogie boards', 'KHAAAAAAAAAAAAN', 'Root. Trunk. Branch.'];

/*****************************************************
* C. Accessing Elements
****************************************************/
//const randomThings = [1, 10, "Hello", true];
//Access first element with randomThings[0]
//access third element with randomThings[2]

/*****************************************************
* D. Change values
****************************************************/

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
ourClass[4] = "Octocat";
ourClass.push("Cloud City");
console.log(ourClass);

/*****************************************************
* E. Mix it Up
****************************************************/
const myArray = [5, 10, 500, 20];
myArray.push("Aegon");
myArray.shift();
myArray.unshift("Bob Marley");
myArray.pop();
myArray.reverse();
console.log(myArray);

/*****************************************************
* F. Biggie Smalls
****************************************************/
let myInt = 6;
if (myInt < 100) {
    console.log("Little Number");
}
else {
    console.log("Big Number");
}

/*****************************************************
* G. Monkey in the Middle
****************************************************/

if (myInt < 5) {
    console.log("Little Number");
}
else if (myInt > 10){
    console.log("Big Number");
}
else {
    console.log("monkey");
}

/*****************************************************
* H. What's in your closet
****************************************************/

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
  kristynsCloset.splice(6, 0, "Raybans");
  kristynsCloset[5] = "Stained knit hat";
  console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][0] + " and "+ thomsCloset[2][2]);
  thomsCloset[1][2] = "Footie Pajamas";

////////////////////// IV. FUNCTIONS //////////////////////
/*****************************************************
* A. printGreeting
****************************************************/

function printGreeting(name) {
    return "Hello there, " + name;
}
console.log(printGreeting("Slimer"));

/*****************************************************
* B. printCool
****************************************************/

const printCool = function(name) {
    return name + " is cool";
}
console.log(printCool("Captain Picard"));

/*****************************************************
* C. calculateCube
****************************************************/

function calculateCube(num) {
    return num ** 3;
}
console.log(calculateCube(5));

/*****************************************************
* D. isVowel
****************************************************/

function isVowel(char) {
    char = char.toLowerCase();
    if (char == 'a' || char == 'i' || char == 'o' || char == 'e' || char == 'u') {
        return true;
    }
    return false;
}

console.log(isVowel("A"));

/*****************************************************
* E. getTwoLengths
****************************************************/

function getTwoLengths(str1, str2) {
    return [str1.length, str2.length];
}
console.log(getTwoLengths("Hank", "Hipposomething"));

/*****************************************************
* F. getMultipleLengths
****************************************************/

function getMultipleLengths(...strings) {
    let stringLengths = [];
    for (str of strings) {
        stringLengths.push(str.length);
    }
    return stringLengths;
}
console.log(getMultipleLengths("me", "will", "butter", "pot roast"));

/*****************************************************
* G. maxOfThree
****************************************************/

function maxOfThree(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    }
    else if (num2 >= num3) {
        return num2;
    }
    else {
        return num3;
    }
}

console.log(maxOfThree(1000, 100, 2000));

/*****************************************************
* H. printLongestWord
****************************************************/

function printLongestWord(strings) {
    let index = 0;
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length > strings[index].length) {
            index = i;
        }
    }
    return strings[index];
}

console.log(printLongestWord(['sausage', 'pancakes', 'cheese', 'bacon', 'muffins','milk']));

//////////////// V. OBJECTS //////////////////////////////////////////////////
/*****************************************************
* A. Make a User Object
****************************************************/