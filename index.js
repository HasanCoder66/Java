// Third attempt

var xml2json = require("xml-to-json");
var convert = require("xml-js");
var readlineSync = require("readline-sync");
var xml2js = require("xml2js");

var userGoingToThisPath = readlineSync.question(
  "Where do you want to go?\n 1. Path 1\n 2. Path 2\n 3. Path 3\n"
);

const xmlToJson = (xmlString, callback) => {
  const parser = new xml2js.Parser();

  parser.parseString(xmlString, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const XMLTOJSONFUNC = () => {
  var inputFromUser = readlineSync.question(
    "Give me the data to convert XML to Json: "
  );

  // console.log(inputFromUser);

  // Example usage:
  const xmlString = inputFromUser || "<root><element>value</element></root>";

  xmlToJson(xmlString, (err, jsonResult) => {
    if (err) {
      console.error("Error converting XML to JSON:", err);
    } else {
      console.log("JSON Result:", jsonResult);
    }
  });
};

// Higher-order function to execute a specific path
const executePath = (pathNumber, callback) => {
  return () => {
    if (userGoingToThisPath === pathNumber) {
      console.log(`Executing path ${pathNumber}...`);
      callback();
    } else {
      console.log("Invalid input. Exiting...");
    }
  };
};

// Curry function for executePath
const curryExecutePath = (pathNumber) => (callback) => executePath(pathNumber, callback);

// Curry functions for paths 2 and 3
const executePath2 = curryExecutePath("2");
const executePath3 = curryExecutePath("3");

// Call the appropriate path based on user input
switch (userGoingToThisPath) {
  case "1":
    executePath("1", XMLTOJSONFUNC)();
    break;
  case "2":
    executePath2(XMLTOJSONFUNC)();
    break;
  case "3":
    executePath3(XMLTOJSONFUNC)();
    break;
  default:
    console.log("Invalid input. Exiting...");
    break;
}

const firstFunction = () => {
  if (userGoingToThisPath === "1") {
    console.log("Executing the first function...");
    // XMLTOJSONFUNC();
  } else {
    console.log("Invalid input. Exiting...");
  }
};

// Call the first function
// firstFunction();










// second attempt

// var xml2json = require("xml-to-json");
// var convert = require("xml-js");
// var readlineSync = require("readline-sync");
// var xml2js = require("xml2js");

// var userGoingToThisPath = readlineSync.question(
//   "Where do you want to go?\n V1 \n V2 \n V3"
// );

// const xmlToJson = (xmlString, callback) => {
//   const parser = new xml2js.Parser();

//   parser.parseString(xmlString, (err, result) => {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, result);
//     }
//   });
// };

// const XMLTOJSONFUNC = () => {
//   var inputFromUser = readlineSync.question(
//     "Give me the data to convert XML to Json: "
//   );

//   console.log(inputFromUser);

//   // Example usage:
//   const xmlString = inputFromUser || "<root><element>value</element></root>";

//   xmlToJson(xmlString, (err, jsonResult) => {
//     if (err) {
//       console.error("Error converting XML to JSON:", err);
//     } else {
//       console.log("JSON Result:", jsonResult);
//     }
//   });
// };

// const firstFunction = () => {
//   if (userGoingToThisPath === "1") {
//     console.log("Executing the first function...");
//     XMLTOJSONFUNC();
//   } else {
//     console.log("Invalid input. Exiting...");
//   }
// };

// // Call the first function
// firstFunction();










// fist attempt
// var xml2json = require("xml-to-json");
// var convert = require("xml-js");
// var readlineSync = require("readline-sync");
// var xml2js = require("xml2js");

// // const prompt = require('prompt-sync')();
// var userGoingToThisPath = readlineSync.question(
//   "Where you want a go \n V1 \n V2 \n V3"
// );

// const XMLTOJSONFUNC = () => {
//   var inputFromUser = readlineSync.question(
//     "Give me the data convert XML to Json"
//   );
//   console.log(inputFromUser);
//   function xmlToJson(xmlString, callback) {
//     const parser = new xml2js.Parser();

//     parser.parseString(xmlString, (err, result) => {
//       if (err) {
//         callback(err, null);
//       } else {
//         callback(null, result);
//       }
//     });
//   }

//   // Example usage:
//   const xmlString = inputFromUser || "<root><element>value</element></root>";

//   xmlToJson(xmlString, (err, jsonResult) => {
//     if (err) {
//       console.error("Error converting XML to JSON:", err);
//     } else {
//       console.log("JSON Result:", jsonResult);
//     }
//   });
// };
// function firstFunction(XMLTOJSONFUNC) {
//   // const userInput = prompt('Press 1 to execute the first function: ');

//   if (userGoingToThisPath === "1") {
//     console.log("Executing the first function...");
//     XMLTOJSONFUNC()
//     // Call your first function here
//     // customFunction();
//   } else {
//     console.log("Invalid input. Exiting...");
//   }
// }

// function secondFunction(customFunction) {
//   if (userGoingToThisPath === "2") {
//     console.log("");
//     customFunction()
//   } else {
//     console.log("Executing the second function....");
//   }
// }
// function thirdFunction() {
//   if (userGoingToThisPath === "3") {
//     console.log("Executing the third function...");
//   } else {
//     console.log("Invalid input. Exiting...");
//   }
// }

// Calling the first function with the second function as a callback
// firstFunction(secondFunction());

// function customFunction() {
//   console.log("Custom function executed.");
//   // Add your custom logic here
// }

firstFunction(XMLTOJSONFUNC())


// FUNCTION KA KAAM KISI PARTICULAR TASK KO PERFORM KERNE KA HOTA HAI
// 26-12-2023
// FUNCTION PRACTICE

// 1 NAMED FUNCTION

// function add (a , b){

//     console.log( a + b)
// }

//  add(2 ,3)

//2 ANONYMOUS FUNCTION

// let multiply = function(a,b){
//     console.log(a * b)
// }
// multiply(45 , 45)

//3 ARROW FUNCTION

// const squareRoot = (e) => e ** 2

// console.log(squareRoot(12))

// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

// (function(){
//     console.log('function is running')
// }) ();

// const factorial = (n) =>{
//     if(n <= 1){
//         return n
//     } else {
//        return factorial(n-1)
//     }
// }

// factorial(12)

// function factorial(n) {
//     if (n <= 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// factorial(2)

// const bookingEmptyArray = []

// const createBookings = (flightNum , pessenger = 2 , price = 500 * pessenger) => {

//     const booking = {
//         flightNum,
//         pessenger,
//         price
//     }
//     console.log(booking)
//     bookingEmptyArray.push(booking)
// }
// createBookings('LH 12' )
// createBookings('12', '26', '3500' )

// const createHelloWorld = () => {
//     // console.log('hsaan')
//     function returnedFunc(){
//         return 'Hello World'

//     }
//     return returnedFunc()
// }
// console.log(createHelloWorld());

// another example

// const sayHello = () => {
//     console.log('hello');
// }

// function mimic (func)  {
// return function() {
//     return func()
// }
// }
// var sayHelloCopy = mimic(sayHello)
// sayHello()
// sayHelloCopy()

// 27-12-2023 ====>

// higher order function

// hello(sayHasan('hasan'))

// hello(sayHasan('hasan'))
// hello(sayHasan('hasan'))

// forLoop()
// const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// for(let  i = 0 ; i < arr.length ; i ++ ){
//     if(i % 2 ===  0){
//         console.log(i ,'i agaya even')
//     }else{
//         console.log(i , 'odd number')
//     }
// }

// const std = [ 100 ,200 , 300 , 400]
// let  sum =0;
// for(let i = 0 ; i < std.length ; i ++){
//     sum += std[i]
//     console.log(sum + std[i])
// }

// for loop and function helps create table

// const table = (num) => {
//   for (let i = 1; i <= 11; i++) {
//     alert(`${num} X ${i} = ${num * i}`);
//   }
// };

// table(4)

// var x, y;
// var z ='';

// for (let x = 1; x <= 3; x++) {
//   for (y = 1; y < x; y++) {

//     z = z + "+"
//     console.log(z)

//   }
// }

// Alert Chapter Questions ===>

// 1

// alert('Hello ! Welcome to Our Website')

// 2

// alert('Error ! please Enter a valid password')

// 3

// alert('Welcome to JS land! \n Happy Coding')

// 4

// alert('Welcome to JS land! ')
// alert('Happy Coding \n ')

// 5

// console.log('Happy coding!')

// 6

// const obj1 = {
//   name : 'hamza',
//   age : 18
// }

// const obj2 = {
//   name : 'hasan',
//   age : 20
// }

// const obj3 = {
//   ...obj1 , obj2
// }

// console.log(obj3)
// console.log(obj3.obj2.name, obj1.name)

// const studentDataFunc = (value) => {

//   let emptyArray = [];
//   var studentSub = prompt(`write your subjects please! `);
//   let totalMarks = studentSub * 100
//   for (let i = 1; i <= studentSub; i++) {
//     let marksStudents = prompt(`write your subject No ${i} numbers`);
//     emptyArray.push(Number(marksStudents));
//   }
//   // console.log(emptyArray);
//   const sum = emptyArray.reduce((accumulator , currentValue) => accumulator + currentValue)
//   console.log(`Total Marks ${totalMarks}`)
//   console.log(`Obtained Marks ${sum}`)
//   const percentage = Math.ceil(sum / totalMarks * 100)
//   console.log(`${percentage}%`)

//   if(percentage >= 80){
//     console.log(`Result ::: You Got A+ Grade`)
//   }
//   else if(percentage >= 70){
//     console.log(`Result ::: You Got A Grade`)
//   }
//   else if(percentage >= 60){
//     console.log(`Result ::: You Got B Grade`)
//   }
//   else if(percentage >= 50){
//     console.log(`Result ::: You Got C Grade`)
//   }
//   else{
//     console.log(`Result ::: Fail`)
//   }
// };

// studentDataFunc();

// function xmlToString(xml, callback) {
//     // Assume some asynchronous operation to convert XML to string
//     setTimeout(() => {
//         const result = "XML String Representation";
//         callback(result);
//     }, 1000);
// }

// const curry = (fn) => {
//     return function curried(...args) {
//         if (args.length >= fn.length) {
//             return fn(...args);
//         } else {
//             return function (...nextArgs) {
//                 return curried(...args, ...nextArgs);
//             };
//         }
//     };
// };

// const curryXmlToString = curry(xmlToString);

// function convertToString(converterFunction, data, callback) {
//     converterFunction(data, (result) => {
//         callback(result);
//     });
// }

// (function () {
//     const jsonData = { key: "value" };
//     const xmlData = "<root><element>value</element></root>";

//     convertToString(curryXmlToString, xmlData, (xmlString) => {
//         console.log("XML to String:", xmlString);
//     });

//     convertToString(JSON.stringify, jsonData, (jsonString) => {
//         console.log("JSON to String:", jsonString);
//     });
// })();

// create functions any 3 to xml to json
//

// const promptRunning = () => {

// }

// promptRunning()
// prompt('give the data to convert into json')
