// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
// the nested function, nestedFunction, can access the variable internal because, the variable it located outside of its scope. 
// a function can only reach outside of its function, never inside.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation() {
  let sum = 0;
  return function adder() {
    return 
  }
}

const addingNumbers = summation();

console.log(summation(4));