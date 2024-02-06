// https://blog.pusher.com/promises-async-await/
// https://www.youtube.com/watch?v=PoRJizFvM7s&t=13s

way to work with promises, making asynchronous operations look and behave more like synchronous ones. 
The keyword async before a function, meaning: a function always returns a promise 

async function foo() {
  return 'Hello Venkat';
}

console.log(foo()); // [object Promise]
// with async, it returns Promise Object

async function read() {
  return 'Hello Neeraja';
}

read().then((resolve, reject) => {
  console.log(resolve);
}); // 1

// Since, It's a promise, we can chain with the then and can get desired result
The keyword await makes function to wait until that promise settles and returns its result. 
async function fetchData() {
  // Asynchronous operation (e.g., fetching data)
let d = await fetch('api/data'); // it wait's until the promise resolves
  return d.json();
}
await literally suspends the function execution until the promise settles, and then continue it with the promise result
Can’t use await in regular functions (throws syntax error). Should use with async only.
Without await -> Order not guaranteed; With await -> Order is guaranteed
function waitTwoSeconds(message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message + ' resolved after 2 seconds');
    }, 2000);
  });
}

// Using promises without await
function executeWithoutAwait() {
  waitTwoSeconds('First')
    .then((result) => {
      console.log(result);
    });

  console.log('Continuing with other tasks...');
}

executeWithoutAwait();
// O/P : Continuing with other tasks...
// O/P : First resolved after 2 seconds
// Here, it became asynchronous, not maintained order, but if we try with // async/await, the order will be maintained.

// Using promises with await/async
async function executeWithAwait() {
  const result1 = await waitTwoSeconds('First');
  console.log(result1);
  console.log('Continuing with other tasks...');
}

executeWithAwait();
// First resolved after 2 seconds
// Continuing with other tasks...
Why & Best scenario's to use:
API Calls: When making multiple API calls where the result of one call affects the next, async/await ensures a more logical and sequential flow.
Error Handling: try...catch blocks can be used with async/await, making error handling more straightforward compared to traditional promise chaining.
async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
