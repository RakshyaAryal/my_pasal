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
citizen['name'] = "sita"; // ram is replaced by sita
citizen['race'] = "white";
let ctz = citizen.name; //ram

const citizen = {
    name: "ram",
    ssn: "213-123-3445",
    mailing_address: "florida",
    phone_no: 3232112345,
    dob: "05-02-1992"

};



let uni = university.name; //purdue
const university = {
    name: "purdue",
    date_of_estd: 1990,
    address: "Indiana",
    total_majors: 25
};
university["address"] = "Missouri"; // Indiana is replaced by Missouri
university['founder'] = "John";

let mob = Mobile.brand; //samsung
const Mobile = {
    brand: "samsung",
    color: "black",
    model: "j7 prime",
    type: "android"
};
Mobile.model = "s6"; //j7 prime is replaced by s6
Mobile['functions'] = "camera";


let food = {
    item: "chicken",
    type: "thai",
    amount: "2 plate"
};
food.item = "momo"; //chicken is replaced by momo
food['spicy_level'] = "mild";
let food = food.item; //chicken



let flower = {
    name: "rose",
    color: "white",
    kind: "hybrid"

};
flower.color = "red"; // white is replaced by red
flower['season'] = "spring";
let flo = flower.name; //rose



// =========================== JSON Object Array ==============
let mobiles = [
    {
        brand: "samsung",
        color: "black",
        model: "j7 prime",
        type: "android"
    },
    {
        brand: "samsung",
        color: "black",
        model: "A51",
        type: "android"
    },
    {
        brand: "iphone",
        color: "golden",
        model: "11 pro max",
        type: "ios"
    }
];

// create five more object array like this
// example
let model = mobiles[1].model; // A51
let type = mobiles[2].type; // ios

mobiles[2].color = "red"; // Replace golden by red

//For loop (Must be array)

//EG 1: WAP to print all array element
let animals = ["tiger", "lion", "dog"];
for (let animal of animals) {
    console.log(animal);
}

let birds = ["parrot", "owl", "crow"];
for (let bird of birds) {
    console.log(bird);
}

let mobiles = ["name", "model", "color"];
for (let mobile of mobiles){
    console.log(mobile);
}

let flowers = ["name", "type", "size"];
for (let flower of flowers){
    console.log(flower);
}

let foods= ["name", "spicy_level", "type", "weight"];
for (let food of foods){
    console.log(food);
}

let employee = ["employee_id", "name", "address", "phone_no", "ssn_no"];
for (let employee of employees){
    console.log(employee);
}

// EG 2: WAP to print all array object

let mobiles = [
    {
        brand: "samsung",
        color: "black",
        model: "j7 prime",
        type: "android"
    },
    {
        brand: "samsung",
        color: "black",
        model: "A51",
        type: "android"
    },
    {
        brand: "iphone",
        color: "golden",
        model: "11 pro max",
        type: "ios"
    }
];

for (let mobile of mobiles) {
    console.log(mobile.brand);
    console.log(mobile.color);
    console.log(mobile.model);
    console.log(mobile.type);
    console.log('-------------');
}

// next type
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i].brand);
    console.log(animals[i].color);
    console.log(animals[i].model);
    console.log(animals[i].type);
}

for (let i = 0; i < mobiles.length; i++) {
    console.log(mobiles[i]);
}

// Assignment
let employees = [
    {
        name: "ram",
        age: 20,
        ssnNo: '123-234-333',
        sex:  "Male",
        phoneNo: "434-343-3343"
    },

    {
        name: "heena",
        age: 35,
        ssnNo: "465-435-354",
        sex: "Female",
        phoneNo: "128-435-3534"
    },

    {
        name: "serry",
        age: 25,
        ssnNo: "637-434-322",
        sex: "Female",
        phoneNo: "452-433-3223"

    },
];

let sex = employees[0].sex; //Male
let age = employees[2].age; //25
let name = employees[1].name; //heena

for (let employee of employees)
{
    console.log(employee.name);
    console.log(employee.ssnNo);
    console.log(employee.phoneNo);
    console.log(employee.age);
    console.log(employee.sex);
}

//OR

for (let i = 0; i < employee.length; i++)
{
    console.log(employee[i]);
}

for (let i=0; i<employees.length; i++)
{
    console.log(employee[i].name);
    console.log(employee[i].sex);
    console.log(employee[i].age);
    console.log(employee[i].ssnNo);
    console.log(employee[i].phoneNo);

}

let schools = [
    {
        name: "SVI",
        location: "banasthali",
        faculties: "science"
    },
    {
        name: "ktm",
        location: "kathmandu",
        faculties: "mgmt"

    }
];

for(let school of schools)
{
    console.log(school.name);
    console.log(school.location);
    console.log(school.faculties);
}

for (let i=0; i<schools.length; i++)
{
    console.log(schools[i]);
}

for (i=0; i<schools.length; i++)
{
    console.log(schools[i].name);
    console.log(schools[i].location);
    console.log(schools[i].faculties);
}

let countries = [
    {
        name:"USA",
        lattitude: 314.234234234,
        longitude: 75334.45353
    },

    {
        name: "Nepal",
        lattitude: 343.43434,
        longitude: 2324.435
    }
];

for (let country of countries)
{
    console.log(country.name);
    console.log(country.lattitude);
    console.log(country.longitude);
}

for( let i = 0; i<countries.length; i++)
{
    console.log(countries[i]);

}

for (let i= 0; i<countries.length; i++)
{
    console.log(countries[i].name);
    console.log(countries[i].latitude);
    console.log(countries[i].longitude);

}
// WAP to sort in ascending order
let numbers = [5, 4, 10, 8, 1, 6, 2, 7, 3, 9];

for(let i = 0; i < numbers.length; i++)
{
    for (let j = i; j < numbers.length; j++)
    {
        // Ascending Order
        if(numbers[i] > numbers[j]) {
        // if(numbers[i] < numbers[j]) { // Decending order
            // swap logic
            let tmp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = tmp;

        }
    }
}

console.log(numbers);

//WAP to sort in descending order

let numbers = [2,6,1,4,5];

for (i=0; i<numbers.length; i++)
{
    for (j=i; j<numbers.length; j++)
    {
        if (numbers[i]<numbers[j])
        {
            let temp = numbers[i];

            numbers[i] = numbers[j];
            numbers[j] = temp;

        }

    }

}
console.log(numbers);

//wap to count digit in a number eg 5654;
let counter = 0;
while (true) {

    if(counter > 10) {
        break;
    }

    counter++;
}

// while (counter < 10) {
//
//     counter++;
// }

//WAP to find maximum number

let numbers = [3,5,1,4];

let maxValue = numbers[0];
for (let i = 0; i < numbers.length; i++ ) {
    if(maxValue < numbers[i]) {
        maxValue = numbers[i];
    }
}
console.log(maxValue);

//WAP to find minimum number

// wap to filter out even number from array
let numbers = [5, 4, 10, 8, 1, 6, 2, 7, 3, 9];
//output [4, 10, 8, 6, 2]
let evenNumArray = [];
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) { // 9%2 => 0.5, 8%2 => 0, 10%2 => 0
       evenNumArray.push(numbers[i]);
    }
}

console.log(evenNumArray);

// wap to print natural number upto 100
// 1,2,3,4
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
// wap to print whole number upto 100
for (let i = 0; i <= 100; i++) {
    console.log(i);
}

// wap to print integer number -100 to 100
for (let i = -100; i <= 100; i++) {
    console.log(i);
}

//wap to check palindrome number eg 16461
// for this take ref from array sorting

/**
 * https://www.w3schools.com/js/js_arrays.asp
 * https://www.w3schools.com/js/js_array_methods.asp
 * https://www.w3schools.com/js/js_array_sort.asp
 * https://www.w3schools.com/js/js_array_iteration.asp
 * https://www.w3schools.com/js/js_loop_for.asp
 * */
// nodejs, anuglarjs , react js, react native, vue native, vue js, express js, mongodb
// crud on json object
// json object = object => table row
// json object array => table
// spread operation (...)
// normal array merge
// object array merge
// object merge
// axios ajax call

