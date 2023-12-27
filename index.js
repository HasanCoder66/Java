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

const hello = () => {
  console.log("hello");
};

const sayHasan = (name) => {
  return console.log(`${name} `);
};
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

const table = (num) => {
  for (let i = 1; i <= 11; i++) {
    alert(`${num} X ${i} = ${num * i}`);
  }
};

// table(4)

// var x, y;
// var z ='';

// for (let x = 1; x <= 3; x++) {
//   for (y = 1; y < x; y++) {
    
//     z = z + "+"
//     console.log(z)
    
//   }
// }



