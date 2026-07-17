// * Continue means skip the current iteration and move to the next iteration of the loop. It is used to skip certain values in a loop based on a condition.

// for (let i = 0; i <= 10; i++) {
//  * if (i > 4) {
//     continue;
//   }
//   console.log("Value of I:", i);
// }

// for (let i = 0; i <= 10; i++) {
//   *if (i === 4) {
//     continue;
//   }
//   console.log("Value of I:", i);
// }

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log("Value of I:", i);
// }

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log("Value of I:", i);
}
