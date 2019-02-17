                                          // Object.freeze(), Object.seal()

// Object.seal(obj);
// method seals an object, preventing new properties from being added to it 
   // and marking all existing properties as non-configurable. 
   // Values of present properties can still be changed as long as they are writable.
   // The prototype chain remains untouched. However, the __proto__  property is sealed as well.

   // using delete will return false

// obj: The object which should be sealed.
        //It can be a Function or other non-primitive value.

const mobile = {
    network:'Airtel',
    non_removable_battery:true,
    battery_mah:3000
};
console.log(mobile); // {network: "Airtel", non_removable_battery: true, battery_mah: 3000}

Object.seal(mobile);

console.log( delete mobile.battery_mah ); // false
console.log(mobile); // {network: "Airtel", non_removable_battery: true, battery_mah: 3000}

mobile.network = 'BSNL';
console.log(mobile); // {network: "BSNL", non_removable_battery: true, battery_mah: 3000}

mobile.newProp = 'Hello Mobile';
console.log(mobile); // {network: "BSNL", non_removable_battery: true, battery_mah: 3000}

const CITRUS = ['lemons','moosambi','grapes','oranges'];
CITRUS[4] = 'pine-apple';
console.log(CITRUS); // ["lemons", "moosambi", "grapes", "oranges", "pine-apple"]

delete CITRUS[0];
console.log(CITRUS); // [empty, "moosambi", "grapes", "oranges", "pine-apple"]

Object.seal(CITRUS);
console.log(CITRUS); // [empty, "moosambi", "grapes", "oranges", "pine-apple"]
console.log(delete CITRUS[1]); // false
CITRUS[5] = 'apples';
console.log(CITRUS); // [empty, "moosambi", "grapes", "oranges", "pine-apple"]


// Object.freeze(obj);
// freezes an object, object can no longer be changed,
   // prevents new properties from being added to it,
  // existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties
// Nothing can be added to or removed from the properties set of a frozen object

const FRUITS = ['Apples','Bananas','Carrot','Dragon Fruit'];

Object.freeze(FRUITS);

console.log(FRUITS); // ["Apples", "Bananas", "Carrot", "Dragon Fruit"]

FRUITS[4] = 'Figs';

console.log(FRUITS); // ["Apples", "Bananas", "Carrot", "Dragon Fruit"]
                     // In strict mode such attempts will throw TypeErrors

// shallow freeze

/* 
    The result of calling Object.freeze(object) only applies to the immediate properties of object itself 
    and will prevent future property addition, removal or value re-assignment operations only on object.
     If the value of those properties are objects themselves, 
     those objects are not frozen and may be the target of property addition, removal or value re-assignment operations.

var employee = {
  name: "Mayank",
  designation: "Developer",
  address: {
    street: "Rohini",
    city: "Delhi"
  }
};

Object.freeze(employee);

employee.name = "Dummy"; // fails silently in non-strict mode
employee.address.city = "Noida"; // attributes of child object can be modified

console.log(employee.address.city) // Output: "Noida"   */

// To make an object immutable, recursively freeze each property which is of type object (deep freeze).
