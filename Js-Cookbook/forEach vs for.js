// forEach
// 1. When you are not sure about length of array
// 2. no errors comes in forEach, beacuse of iteration initalisation, i=0;i<=length, this cause extra one loop
// 3. 

// forEach loop can be stop, by Throw ing Exceptions
const array = [1, 2, 3, 4, 5];

try {
    array.forEach(item => {
        if (item === 3) {
            throw new Error('BreakException');
        }
        console.log(item);
    });
} catch (e) {
    // 
}


// for
// 1. When you want break the loop
// 2. When you want to loop backwards for(let i = arr.length-1;i>=0;i--)

for (let i = 0; i < 10; i++) {
  console.log(i);
  if (i === 5) {
    break; // exit the loop when i is 5
  }
}

function exampleLoop() {
    for (let i = 0; i < 10; i++) {
      console.log(i);
      if (i === 7) {
        return; // exit the loop and the function when i is 7
      }
    }
  }
  
  exampleLoop();

  try {
    for (let i = 0; i < 10; i++) {
      console.log(i);
      if (i === 4) {
        throw 'BreakException'; // exit the loop when i is 4
      }
    }
  } catch (e) {
    // 
  }
  