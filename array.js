//shift

let fruits = ["apple", "banana", "cherry"];
let removed = fruits.shift();
console.log(removed);
console.log(fruits);

//unshift
let numbers = [2, 3, 4];
let newLength = numbers.unshift(1);
console.log(numbers);
console.log(newLength);

//join
let mixed = ["a", undefined, "b", null];
console.log(mixed.join());

//split
let text = "apple,banana,cherry";
let result = text.split(",", 1);
console.log(result);

//find
let users = [
  { id: 1, name: "manu" },
  { id: 2, name: "teena" },
  { id: 3, name: "sonia" },
];
let user = users.find((u) => u.name === "Bob");
console.log(user);

//filter
let words = ["apple", "banana", "cherry", "date"];
let ans = words.filter((word) => word.startsWith("b"));
console.log(ans);

//map
let price = [10, 20, 30];
let res = price.map((price) => price * 2);
console.log(res);

//includes
let numb = [1, 2, 3, 4, 5];
if (numb.includes(3)) {
  console.log("The number 3 is in the array.");
}

//pop
let stack = [1, 2, 3];
console.log(stack.pop());
console.log(stack);

//slice
let n = [1, 8, 3, 9, 5];
let slicedArray = n.slice(1, 2);
console.log(slicedArray);
console.log(n);

//splice
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 3, "a", "b");
console.log(arr);
