// JAVASCRIPT BASIC

//1)========= Variable Declaration ===========
// var, let, const
//Example
var fruit; // variable declaration;
var fruit = "apple"; // variable declaration with initialization

let animal = "tiger";
const bird = "eagle";
const rollNo = 1;
let money = 4.5;
// Node: use const and let only

//2)==================== Some Useful Operators ===================
money++; // money is increased by 1
money--; // money is decreased by 1
// === // strict comparision note: never use '==' always use '==='
// !== // strict not equal to never use '!='
// Most important example
let sum = animal + bird; // tigereagle
sum = animal + " " + bird; // tiger eagle
sum = animal + " " + bird + rollNo + money; // tiger eagle14.5
sum = rollNo + money; // 5.5
sum = animal + " " + bird + (rollNo + money); // tiger eagle5.5
sum = rollNo + money + bird; // 14.5eagle
let x = "I";
let y = "am";
let z = "boss";
sum = x+y+z; //Iamboss
sum = x+' ' + y + " "+ z + ".";//I am boss.
sum = x.toLowerCase() + y.charAt(0).toUpperCase() + z.toUpperCase() +".";// iAmBOSS.

//3)=================== Javascript Array ======================
let animals = ["tiger", "lion", "dog"];
let birds = [
    "eagle",
    "parrot",
    "pigeon",
    "crow"
];

// Count
let animalCount = animals.length; // 3
let birdCount = birds.length; // 4

// Array read
let item1 = birds[1]; // parrot
let item2 = animals[2]; // dog

// Array value change
birds[1] = "p"; // parrot is replaced by p

// Add New value to array
birds.push("osprey"); // ["eagle", "parrot", "pigeon", "crow", "osprey"]
birds.push("owl"); // ["eagle", "parrot", "pigeon", "crow", "osprey", "owl"]

//4) ======================= JSON Object (Most Important) =====================
const bird = { name: "Eagle" , color: "black", weight: "5kg"};
const student = {
    name: "Kiran",
    rollNo: 2,
    address: "Sinamangal",
    phone: "+977 9803467089",
    dob: "2048-05-02"
};

// Object read
let addr = student.address; // Sinamangal
addr = student["address"]; // Sinamangal
let fullname = student.name; //

// Object value change
student['name'] = 'Rakshya'; // kiran is replaced by rakshya
student.name = 'Rakshya'; // same

// Add new key/value pair
student['email'] = "kiran.mulmi@gmail.com";
// const student = {
//     name: "Kiran",
//     rollNo: 2,
//     address: "Sinamangal",
//     phone: "+977 9803467089",
//     dob: "2048-05-02"
//     email: "kiran.mulmi@gmail.com"
// };
student.email = "kiran.mulmi@gmail.com"; // Never do that, it wont work

// 5)your work => create 5 more objects like this

// =========================== JSON Object Array ==============


//JSON Object value add/remove

//For loop

