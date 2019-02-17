                    //setInterval(),clearInterval(),setTimeout(),clearTimeout()

// setTimeout(function,milliseconds)
//  sets a timer which executes a function or specified piece of code once after the timer expires
// The setTimeout() method of the WindowOrWorkerGlobalScope                     

setTimeout(()=>{
    console.log('After 3 seconds');
},3000);

// to clear

let setID = setTimeout(()=>{
    console.log('after 4 seconds');
},4000);

//clearTimeout(timeoutID);
// cancels a timeout previously established by calling setTimeout()
clearTimeout(setID);
//Passing an invalid ID to clearTimeout() silently does nothing; no exception is thrown.


//setInterval(function,milliseconds);
// repeatedly calls a function or executes a code snippet, with a fixed time delay between each call

let intervalID = setInterval(()=>{
    console.log('every 2 seconds boooom !');
},2000);

//sets a timer which executes a function or specified piece of code once after the timer expires
clearInterval(intervalID);


// All-in-one

console.clear();

let intervalID2 = setInterval(()=>{
    console.log('Please log every 3 seconds');
},3000);

let timeoutID2 = setTimeout(()=>{
    console.log('gonna stop setinterval after 9 seconds');
    clearInterval(intervalID2);
},9000);




