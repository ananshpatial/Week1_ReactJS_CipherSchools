const myName = [];
console.log(myName);
myName.push("John")
console.log(myName);


let myName = "John";
console.log(myName);
myName = "Alex";
console.log(myName);


{
    var num = 5;
    console.log(num);
}

//String Interpolation
let firstName = "Anansh";
let lastName = "Rajput";
// let fullName = firstName + " " + lastName;
//console.log(fullName);

let fullName = '${firstName} ${lastName}';
console.log(fullName);
console.log(firstName);

//params
/*function addTwoNumbers(num1,num2) 
{
    return num1+num2;
}*/
//second way to create function in js-->
let addTwoNumbers = (num1,num2) => num1+num2;  //arrow function
console.log(addTwoNumbers(5,6));

let addTwoNumbers = (num1,num2) => {  //output->
    console.log(num1);                //5
    console.log(num2);                //undefined
    return num1+num2;                 //nan
}  
console.log(addTwoNumbers(5));
//default param passing
let addTwoNumbers = (num1,num2 = 10) => {  //output->
    console.log(num1);                //5
    console.log(num2);                //10
    return num1+num2;                 //15
}  
console.log(addTwoNumbers(5))


console.log(addTwoNumbers(5));

//Rest operator-> ...
//spread operator-> ...
let array = [5,10,15,20,25];
let newArray = [ ...array , 26 , 27 ,28];
console.log(array);
console.log(newArray);

//For object
let object = {
    name: "John",
    age: "24",
    city: "New York",
};
let object2 = {...object, country: "USA"};
console.log(object2);


let object = {
    name: "John",
    age: "24",
    address: {
        city: "New York",
        state: "NY",
        country: "USA",
    },
};
/*let object2 = {...object};
object2.address.city= "Newark";
console.log(object);*/  //in this case it'll change the object city from new york to newark (it is called shallow cloning of object)
let object2 = JSON.parse(JSON.stringify(object)); //deep cloning {converting object into JSON and than reading JSON string and than parsing it to new js object}
object2.address.city = "Newark";
console.log(object2); //now on printing object2 it'll print city = newark 
console.log(object); //and on printing object city = new york

