           // ways to create objects in js
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
          // 1.object literals

var Employee = {
    name: "ram Mulagura",
    age: 23,
    marriage: false,
    salaryHike: ["14\%","5\%"], // an array literal
    projects:{                // nested object literal
      first:"Internal Project",
      second:"Customer Project"
    },
    nameNAge: function(){   // function
      return "Employee name is:" + " " + Employee.name + " " + "and his age is:" + Employee.age;
    },  //use of Employye.name is ambigious because Consider that there could be another global variable
       // (that we might or might not be aware of) with the same name

    nameNAge: function(){   // function
      return "Employee name is:" + " " + this.name + " " + "and his age is:" + this.age;
    }//use this keyword because it refers to above obj
};

//to add extra propertyName to obj literal
var gend = Employee.gender = "Male";

//objectName.propertyName
document.getElementById('a').innerHTML = "is Emplyee married ?" + " " +Employee.marriage;

//objectName["propertyName"]
document.getElementById('b').innerHTML = "Salary Hike in second year:" + " " + Employee.salaryHike[1];
document.getElementById('c').innerHTML = "Salary Hike in second year:" + " " + Employee["salaryHike"]["0"];

//objectName.methodName();
//A method is actually a function definition stored as a property value.
document.getElementById('d').innerHTML = Employee.nameNAge();

//If you access the fullName method, without (), it will return the function definition:
document.getElementById('e').innerHTML = Employee.nameNAge;

//access propty of added
document.getElementById('f').innerHTML = "Employee Gender :" + " " +Employee.gender;
document.getElementById('g').innerHTML = "Employee Gender :" + " " +gend;

//
document.getElementById('h').innerHTML = " Emplyee first project:" + " " +Employee.projects.first + "</br> ---------------";
