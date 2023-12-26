// FUNCTION KA KAAM KISI PARTICULAR TASK KO PERFORM KERNE KA HOTA HAI

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

const bookingEmptyArray = []

const createBookings = (flightNum , pessenger = 2 , price = 500 * pessenger) => {
    
    const booking = {
        flightNum,
        pessenger,
        price
    }
    console.log(booking)
    bookingEmptyArray.push(booking)
}
createBookings('LH 12' )
createBookings('12', '26', '3500' )