                                   // Date() Object

// Creates a JavaScript Date instance that represents a single moment in time. 
// Date objects are based on a time value that is the number of milliseconds since 1 January 1970 UTC.  
// JavaScript Date objects can only be instantiated by calling JavaScript Date as a constructor,

// innvoking JavaScript Date as a function 
   //(i.e., without the new operator) will return a string representing the current date and time

   let withoutNew = Date();
   console.log(withoutNew); // Fri Oct 26 2018 16:33:22 GMT+0530 (India Standard Time)
   console.log(typeof withoutNew); // string
   
   
   //new Date();
   
   let presentDate = new Date();
   console.log(presentDate); // Fri Oct 26 2018 16:25:31 GMT+0530 (India Standard Time)
   
   
   //new Date(value);
      // value: Integer value representing the number of milliseconds since January 1, 1970, UTC
   
      let dateValue = new Date(1000);
      console.log(dateValue); // Thu Jan 01 1970 05:30:01 GMT+0530 (India Standard Time)
      
   //new Date(dateString);
      //strongly discouraged
   
   //new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);
      // year: Integer value representing the year. Values from 0 to 99 map to the years 1900 to 1999
      // monthIndex: Integer value representing the month, beginning with 0 for January to 11 for December
      // day: Integer value representing the day of the month.
      // hours: Integer value representing the hour of the day.
      // minutes: Integer value representing the minute segment of a time.
      // seconds: Integer value representing the second segment of a time.
      // milliseconds: Integer value representing the millisecond segment of a time.
     
      let yearAndMonth = new Date(99,10);
      console.log(yearAndMonth); // Mon Nov 01 1999 00:00:00 GMT+0530 (India Standard Time)
      
      let all = new Date(91,9,19,19,10,3000);
      console.log(all);
   
    //getDate();   //setDate();
    //getDay();    //setDay();
    //getFullYear(); // setFullYear(); ......  
    //getHours();  
    //getMilliseconds();
    //getMinutes();
    //getMonth();
    //getSeconds();

    let presentTime = new Date();
    
    let dayOnly = presentTime.getDay();
    console.log(dayOnly); // 6

    let dateOnly = presentTime.getDate();
    console.log(dateOnly); // 27

    console.log(presentTime.getFullYear()); //2018
    console.log(presentTime.getHours()); // 19
    console.log(presentTime.getMilliseconds()); //375
    console.log(presentTime.getSeconds()); // 50

   
    let month = presentTime.getMonth(); 
    console.log(month); // 9

    let monthArray = ['Janauary','February','March','April','May','June','July','August','September','October','November','December'];

//    var monthIn= monthArray.filter((mnth,index,arr)=>{

//         if(index === month){
//             return mnth;
//         } 

//     });

    let monthIn = monthArray[month];

    console.log(monthIn);
