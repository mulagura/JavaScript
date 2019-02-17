// 'abbcccddeffff'; output: accce;

let a = 'abbcccddeffff';

let b = [... new Set(a)];

console.log(a); //a,b,c,d,e,f

// let b = [];

// let lengthofa = a.length;

// for(let i=0;i<lengthofa;i++){

//     if()

// }


function getAllIndexes(arr, val) {
    var indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(arr[i]);
    return indexes;
}

let c = [];

for(var j=0;j<b.length;j++){
    var indexes = getAllIndexes(a,b[j]);
    if( (indexes.length) %2 !== 0){
        console.log(indexes);
        c.push(indexes);
    }
    
}

console.log(c);

