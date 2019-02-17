// https://www.youtube.com/watch?v=HgA5VOFan5E
// This course teaches data structures (linked lists, binary search trees, hash tables) from the ground up.
// https://www.youtube.com/watch?v=V6mKVRU1evU

// Constant Runtime: Big O notation: Complexity: O(1)

    let con = (arr)=>{
        console.log(arr[1]);
    };

    con(['alipiri','chittoor']); // chittoor
    con(['tirupati','tirumala','renigunta']); // tirumala

// Linear Runtime: Big O notation: Complexity: O(n)

    let lin = (arr)=>{
        for(let i=0;i<arr.length;i++){
            console.log(arr[i]);
        }
    };

    lin(['apple','banana','carrot']); // apple banana carrot

// Exponential Runtime: O(n^2): Big O notation: Complexity: O(n^2)

    let expo = (arr)=>{

        for(let i=0;i<arr.length;i++){
            for(let j=0;j<arr.length;j++){
                console.log(arr[i]+arr[j]);
            }
        }

    };
    expo(['a','b']); // aa ab ba bb
    expo(['A','B','C']); // AA AB AC BA BB BC CA CB CC

// Logarithmic Runtime: O(log n):Complexity: O(log n)

    // Binary search
