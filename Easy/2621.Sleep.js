
// Code


// Testcase
// Testcase
// Test Result
// 2621. Sleep
// Easy
// premium lock icon
// Companies
// Hint
// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

// Note that minor deviation from millis in the actual sleep duration is acceptable.

 

// Example 1:

// Input: millis = 100
// Output: 100
// Explanation: It should return a promise that resolves after 100ms.
// let t = Date.now();
// sleep(100).then(() => {
//   console.log(Date.now() - t); // 100
// });
// Example 2:

// Input: millis = 200
// Output: 200
// Explanation: It should return a promise that resolves after 200ms.
 

// Constraints:

// 1 <= millis <= 1000


//SOLUTION

async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

// new Promise(...) represents a future value
// resolve is a function the Promise gives you.
// calling resolve() tells the Promise "I'm done -- here's your value"
// setTimeout(resolve, millis) waits millis ms, then call resolve.
// first argument = what to run later(resolve in this case)
// second argument = how many milliseconds to wait.

