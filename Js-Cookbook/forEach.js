// forEach

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// executes for each array element
/* Array.forEach((item,index,arr)=>{
    ...
 }); */

// returns undefined
 
// forEach VS for
// https://davidtang.io/2016/07/30/javascript-for-loop-vs-array-foreach.html

// forEach is built-in method for Arrays
// if we want to loop backwards--> use for loop
    /*for(var i=careers.length-1;i>=0;i--){
        console.log(careers[i]);
    } */
// if an array size is not known, use forEach loop
// in tradition for loop; while initilization for(var i=0;i<=data.length;i++){};  it executes extra one more loop because of i<=; to avoid such erros use forEach
// use for loop to break out of loop
// There is no way to stop or break a forEach() loop other than by throwing an exception

    /* for (let i = 0; i < products.length; i++) {
        if (matchesSomeCriteria(products[i])) {
            doSomething();
            break;
        }
        } */

var careers = ['IT','Pharma','Logistics','Entertainment','Governement'];


var loop = careers.forEach((sector,index,careerArray)=>{
    if(sector==='IT'){
        sector = sector + '& Co.';
    }
    console.log(sector); // IT& Co. Pharma Logistics Entertainment Governement

});

console.log(loop); // undefined
