/**
 ** Task 5 — Even Numbers 
Write a for loop that prints all even numbers between 1 and 30.

 */
console.log("even numbers between 1 and 30 are:");
for (let i = 1; i <= 30; i++) {
  if (i % 2 === 0) {
    console.log(i);
  } else {
    console.log("Not an even  number", i);
  }
}
