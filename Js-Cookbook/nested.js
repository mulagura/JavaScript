// https://www.youtube.com/watch?v=Cta5s1QBD8E
// https://www.youtube.com/watch?v=AqgVLYpBWG8&index=7&list=PLyuRouwmQCjnupe_ohQgFvwFZF8dycwK8
var twoDArray = [1, 2, 3, [4, 5, 6, 7, 8], [9, 10]];

var twoDArrayLength = twoDArray.length;

for (var i = 0; i < twoDArrayLength; i++) {

    console.log(twoDArray[i]); // 1 2 3 [ 4, 5, 6, 7, 8 ] [9,10]
    var innerLength = twoDArray[i].length;

    if (innerLength >= 1) {
        for (var j = 0; j < innerLength; j++) {
            console.log(twoDArray[i][j]); // 4 5 6 7 8 9 10
        }
    }

}

twoDArray.forEach((item, index, arr) => {

    console.log(item); // 1 2 3 [ 4, 5, 6, 7, 8 ] [9,10]
    console.log(typeof item, Array.isArray(item)); // number false number false number false object true object true
    if (item.length >= 1) {
        item.forEach((innerItem, innerIndex, innerArray) => {
            console.log(innerItem); // 4 5 6 7 8 9 10
        });
    }
});

var multiDArray = [
    ['wipro', 'mnc', ['bas', 'digital', 'UXP']],
    ['infosys', 'mnc', ['DX', 'infra'], ['karnataka', ['bengaluru', 'mangalore', 'mysore'], 'telanagana']]
];

var multiDArrayLength = multiDArray.length;

for (var i = 0; i < multiDArrayLength; i++) {
    var secondLevelLength = multiDArray[i].length;
    if (typeof multiDArray[i] !== 'string' && secondLevelLength >= 1) {
        for (var j = 0; j < secondLevelLength; j++) {
            var thirdLevelLength = multiDArray[i][j].length;
            if (typeof multiDArray[i][j] !== 'string' && thirdLevelLength >= 1) {
                for (var k = 0; k < thirdLevelLength; k++) {
                    console.log(multiDArray[i][j][k]);
                }
            }

        }
    }

}


multiDArray.forEach((company)=>{
    company.forEach((insights)=>{
        console.log(insights,insights.length,typeof insights,Array.isArray(insights));
        if(typeof insights !== 'string' && insights.length>=1){
            insights.forEach((insights2)=>{
                console.log(insights2);
            });
        }

    });
});

var obj = {

    "data":[{"id":"4831","name":"Rui Vasco Martins","nickname":"rvgmartins","created_at":"2015-05-27 12:54:33"},
            {"id":"4832","name":"Ramsey","nickname":"sey","created_at":"2016-05-27 12:54:33"},
            {"id":"4833","name":"valr marghis","nickname":"valar","created_at":"2017-05-27 12:54:33"}
           ],
    "status":200,
    "config":{"method":"GET","transformRequest":[null],"transformResponse":[null],"url":"services/dashboard","headers":{"Accept":"application/json, text/pla`in, */*"}},
    "statusText":"OK"
};

//to access status,statusText

for(var stat in obj){
    if(stat === 'status' || stat === 'statusText'){
        console.log(obj[stat]); // 200 OK
    }
   
}

// to access obj data

var particulars = obj.data;
console.log(particulars); // [ ]
console.log(Array.isArray(particulars)); // true

var particularsLength = particulars.length;

for(var i=0;i<particularsLength;i++){
    console.log(particulars[i].id); // 4831 4832 4833
}





