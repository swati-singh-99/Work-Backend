//if statement
let age = 25;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

//if else statement
let temperature = 75;

if (temperature >= 80) {
  console.log("It is hot");
} else if (temperature >= 60) {
  console.log("It is midium temprature");
} else {
  console.log("It is cold");
}

//switch statement
let day = "Thursday";

switch (day) {
  case "Sunday":
    console.log("Today is Sunday.");
    break;
  case "Monday":
    console.log("Today is Monday.");
    break;
  case "Tuesday":
    console.log("Today is Tuesday.");
    break;
  case "Wednesday":
    console.log("Today is Wednesday. ");
    break;
  case "Thursday":
    console.log("Today is Thursday.");
    break;
  case "Friday":
    console.log("Today is Friday.");
    break;
  case "Saturday":
    console.log("Today is Saturday.");
    break;
  default:
    console.log("Invalid day");
}

// for loop
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log(`The sum of numbers:${sum}`);

// try-catch
let userInput = "xyz";

try {
  let number = parseInt(userInput);
  if (isNaN(number)) {
    throw Error("Invalid input! Please enter a valid number.");
  }
  console.log("The number is " + number);
} catch (error) {
  console.log(error);
}

//while loop
let count = 10;

while (count > 0) {
  console.log("decrement of number:" + count);
  count--;
}

//do while
let inc = 5;

do {
  console.log("Increment of number:" + inc);
  inc++;
} while (inc <= 10);

//for-in loop

const fruits = ["orange", "apple", "banana", "cherry"];

for (let x in fruits) {
  console.log(x + "=" + fruits[x]);
}

//for-of
const somefruits = ["apple", "banana", "cherry"];

let c = 0;

for (let fruit of somefruits) {
  console.log(fruit);
  c++;
}
