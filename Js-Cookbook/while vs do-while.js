// A while loop is a control flow statement in programming 
// that allows you to repeatedly execute a block of code as long as a specified condition is true

let val = 0;

while (val < 5) {
    console.log("Count is: " + val);
    val++;
}

// Drawbacks
// 1. Potential Infinite Loops - If the condition in a while loop is always true, 
      // it will result in an infinite loop, causing the program to run indefinitely. 
     // This can lead to performance issues and may even crash the program.
// Caution: Infinite Loop
while (true) {
    // code that keeps running forever
}

// do-while

// In JavaScript, the do-while loop is a control flow statement that repeats a block of code while a specified condition is true. 
// The key difference between a while loop and a do-while loop is that the do-while loop ensures that the block of code is executed at least once, 
// even if the condition is initially false.

do {
  // code to be executed
} while (condition);

let count = 0;

do {
  console.log(count);
  count++;
} while (count < 5);

// In this example, the do-while loop will execute the block of code inside the curly braces at least once 
// because the condition (count < 5) is checked after the code block. 
// The loop will continue to execute as long as the condition remains true. 
// The output of this example will be: 0 1 2 3 4

// Even if count is initially greater than or equal to 5, the block of code is still executed once.

// The code block inside the do-while loop is guaranteed to run at least once.
// The condition is evaluated after the code block, 
   // so the block executes once before checking if the condition is true.
// If the condition is false after the first execution, the loop will terminate.
// do-while loops are less commonly used than while or for loops, 
   // but they can be handy in situations where you want to ensure a certain block of code runs at least once, regardless of the initial condition.