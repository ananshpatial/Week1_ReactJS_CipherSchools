// let array = [1,2,3,4,5];
// let newArray = [];
//  for (let i =0 ; i< array.length; i++)
//  {
//     newArray[i] = array[i] * array[i];
//  }
//  console.log(newArray);

//1.  .map function 
//.map() return newarray from the old array on the bases of computational logic we write like above printing square of each element of old array in new array
let array = [1,2,3,4,5];
// function functionForMap(element) // element = array[i]
// {
//     return element * element;
// }

 //with arrow function/////////////////////////////////
 let functionForMap = (element) => element*element;
///////////////////////////////////////////////////////
 let newArray = array.map(functionForMap);
 console.log(newArray);
 //in js a function is also js object

 //2.  .foreach()
 let array = [1,2,3,4,5];
 array.forEach((element, index) =>{ //here index is optional
    element *= element;
    console.log(element);
 });

 console.log("Array is: " , array);
 //the diff btw .map() and .foreach() is .map() will return you an new array and .foreach() do not return anything

 //3. .filter()
 let array = [10,20,30,40,50]
 let newArray = array.filter((element) => element >= 30 );
 console.log(newArray);

 //4.  .find()
 let array = [10,20,30,40,50]

 let temp = array.find((value) => value > 20 );
 console.log(temp);

 //5.  .sort() 
 let array = [50,40,111,30,20,10];
 let sortedArray = array.sort();
 console.log(sortedArray);  // output will be = (10 111 20 30 40 50 ), here you can see 111 is coming on second place because js sort all the value accourding to a string value, to fix this we use comparators
 //comparator helps to create comparison into any linear data structure
 let array = [50,40,111,30,20,10];
 let sortedArray = array.sort((el1,el2) => {
    el1 = Number(el1);  //Number convert string inti Number like parseInt
    el2 = Number(el2);
    return el1-el2;
 });
 console.log(sortedArray); //now the output will be sorted correctly i.e = (10 20 30 40 50 111)

 //object destructuring 
 /*let details = {
    name: "alex",
    age: 24,
    address: {
        street: "Brooklyn",
        city: "New York",
        state: "NY",
        country: "USA",
        passportDetails: {
            passportNumber: "ABCD1234",
        },
    },
 };
 console.log(details.address.passportDetails.passportNumber);*/
 let details = {
    name: "alex",
    age: 24,
    address: {
        street: "Brooklyn",
        city: "New York",
        state: "NY",
        country: "USA",
        passportDetails: {
            passportNumber: "ABCD1234",
        },
    },
 };
//  let myName = details.name;
//  let myAge = details.age;
let {name : myName , age: myAge} = details; //it creates the copy of the object 
 console.log(myName, myAge);

 //array matching 
 /*if two array don't have same length than they do not match,  if they are pointing toward the same reference than they are the same array
 1. check the reference of array
 2. check the length
 3. check if array[i] = array2[i]*/

 //object matching
 let obj1 = {name: "Ansh"};  //set[name = key : "Ansh" = value]
 let obj2 = {name: "Ansh"};
 function areEqual(obj1,obj2) {  
     if (obj1 == obj2) {            
         return true;
     }

     if(Object.keys(obj1).length != Object.keys(obj2).length) {   //Object.keys is going to return the keys of these object i.e obj1 where key = name and Ansh = value
        return false;
    }

    for (let key of Object.keys(obj1)) {
        if (typeof obj2[key] == "undefined") {   //if there's a key that is present in obj1 but not present in obj2
            return false;
        }
        if (obj2[key] != obj1[key]) {
            return false;
        }
    }
    return true;
}
console.log(areEqual(obj1, obj2));

//map and set
//1. map
let map = new Map();
map.set(1, "Anansh");
map.set(2, "Ansh");
console.log(map);  //map.has(), map.keys(), map.values(), map.entries()

//2. set
let set = new Set();
set.add(1);
set.add(-1);
console.log(set);  //set.size(), set.has(), set.add(), set.delete()

//Class
class Animal {
    noOfLegs;
    color;
    family;
    sound;
    constructor(noOfLegs,color,family,sound) {
        this.noOfLegs = noOfLegs;
        this.color = color;
        this.family = family;
        this.sound = sound;
    }
}

let animal = new Animal(4, "brown","rodent","something");
console.log(animal);
