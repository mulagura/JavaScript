var a = [1,2,3];

var b = [1,2,"3"]


if(a==b){
  console.log("a==b");
}

else if (a===b){
  console.log("a===b");
}

// else if (a=b){
//   console.log(a);
//   console.log(b);
// }


else if (a[0]===b[0]){
  console.log("first element in array are equal ");
}

else{
  console.log("false");
}

for(i=0;i<a.length;i++){
  console.log(a[i]);
  console.log(b[i]);
  if(a[i]===b[i]){
    console.log("hurray same and this is how you compare values in arrAy");
  }
  else {
    console.log("not same ===");
  }
}


//do not compare arrays as strings. So, though this is old question,
//compare arrays - loop through them and compare every value:
