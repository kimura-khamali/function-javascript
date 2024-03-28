//Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order



const name1 = ["Ann","Cynthia","Peter","Ken","Susan"];
return reverseAll(name1);

function reverseAll() {
  const changing = name1.map((str) =>
    str
      .split("")
      .sort()  
     .reverse()
      .join("")
  );
  console.log( changing);
}
//Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
const numbersArray = [1, -2, 3, 0, -5];
check(numbersArray);
function check() {
  const positive = numbersArray.some((number) => number > 0);//greater
  const negative = numbersArray.some((number) => number < 0);//positive
   
  console.log("negative",negative);
  console.log("positive",positive);
}
//Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.
const employeesArr = [
  { id: 1, name: "Ken", salary: 5000 },
  { id: 2, name: "Joy", salary: 6000 },
  { id: 3, name: "Paul", salary: 4500 },
];
sortEmployeesBySalary(employeesArr);

function sortEmployeesBySalary(employees) {
  const sortedEmployees = employees.sort((a, b) => a.salary - b.salary);
  console.log( sortedEmployees);
}
//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
const numbers = [1, 2, 3, 4, 5];
multiplyByTwo(numbers);


function multiplyByTwo() {
    numbers.forEach((number) => console.log(number * 2));
}
//Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new
const numbers1 = [1, 2, 3, 4, 5, 6];
calculate(numbers1);

function calculate() {
    numbers1.slice(0, 4).forEach((number) => console.log(number * 8));
    numbers1.slice(-2).forEach((number) => console.log(number + 5));
  }
