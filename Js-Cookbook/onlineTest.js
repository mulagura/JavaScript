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


<!DOCTYPE html>
<html lang="en">

<head>
    <title>
        TEST
    </title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
</head>

<body>



</body>
<script>
    var a = [1, 4, 6, 8, 9, 2, 5, 7, 3];
    // var set = new Set(a);
    // console.log(set);
    console.time("loop1Way");
    console.log(a.sort((a, b) => a - b));

    for (var i = 1; i <= 10; i++) {

        if (a[i - 1] !== i) {
            console.log('missing NUMBER IS:' + i);
        }

    }
    console.timeEnd("loop1Way");

    console.time("secondWay");
    var aLength = a.length;
    var sum = 0;
    for (var i = 0; i < aLength; i++) {
        sum = sum + a[i];
    }
    //console.log(sum);

    var aSum = ( aLength * (aLength +1) ) /2;
    var sumShouldBe = 55;
    console.log("missing number is:"+ (sumShouldBe-aSum) );
     
    console.timeEnd("secondWay");


</script>


</html>

