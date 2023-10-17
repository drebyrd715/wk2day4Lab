// 1.   Write an function that contains an if/else statement for the following requirements:
// - If student gets 80 or higher: console log  You did a good job
// - If students get 70 or above: console log Keep trying
// - If students get 60 or above: console log ehhhh
// - If students get 55 or above: console log Not to good
// // - Any grade lower than 55 is Bad Grade But You'll Get Em Next Time

// function grading(studentGrade) {
//     if (studentGrade >= 80) {
//         return "You did a good job"
//     } else if (studentGrade >= 70) {
//         return "You Fail Keep trying"
//     } else if (studentGrade >= 60) {
//         return "ehhhh"
//     } else if (studentGrade >= 55) {
//         return "Not Too Good"
//     } else if (studentGrade <= 55) {
//         return "Bad Grade But You'll Get Em Next Time"
//     }
//  }
//     console.log(grading(70));

// 2.   Write a function that prints out multiples of 10 up to a given input (argument)

// let m = 0; 
// while (m <= 100){
//     console.log(m)
//     m += 10;
// } 

// 3.   Write a function that takes bill amount and item price and says how many quarters they'd get in return

// function totalQuarters(billAmount, itemprice) {
//     return (billAmount - itemprice) / .25;
// }
// console.log(totalQuarters(30, 17))  

//4.    Write a function that prints out how many bills you would recieve in change after paying a certain amount.  Return in as large denominations as possible. Parameters should be amount paid and amount cost

// function Change(amountCost, amountPaid) {
//     let billCounter = 0; 
//     let exchange = amountPaid - amountCost
//     while (exchange > 0) {
//         if (exchange >= 100){
//             billCounter+= Math.floor(exchange / 100)
//             exchange -= 100 * Math.floor (exchange / 100)
//         } // subtract 100 from exchange
//         else if (exchange >= 50) {
//             billCounter += Math.floor(exchange / 50)
//             exchange -= 50 * Math.floor (exchange / 50)
//         } // subtract 50 from exchange 
//         else if (exchange >= 20) {
//             billCounter += Math.floor(exchange / 20)
//             exchange -= 20 * Math.floor (exchange / 20)
//         } // subtract 20 from exchange
//         else if (exchange >= 10) {
//             billCounter += Math.floor(exchange / 10)
//             exchange -= 10 * Math.floor (exchange / 10)
//         } // subtract 10 from exchange
//         else if (exchange >= 5) {
//             billCounter += Math.floor(exchange / 5)
//             exchange -= 5 * Math.floor (exchange / 5)
//         } // subtract 5 from exchange
//         else if (exchange >= 1) {
//         billCounter += Math.floor(exchange / 1)
//         exchange -= 1 * Math.floor (exchange / 1)
//     }   // subtract 1 from exchange 
//     }   
//     return billCounter; 
// }
//     console.log(Change(50, 300));


// 5.   Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

// for (let i = 0; i <= 100; i = i + 1) {
//     if ((i % 3 === 0) && (i % 5 === 0)); {
//         console.log('fizzBuzz');
//     }
//      if (i % 3 === 0); {
//         console.log('fizz');
//     }
//     if (i %  5 === 0); {
//         console.log('buzz');
//     }
//         else(i % i === 0); 
//         console.log(i)
// }
       

// make a loop that goes from 1 to 100
for ( let num = 1; num < 101; num ++ ) {
  
    // check if the number is divisible by 3 or 5
    let checkForThree = num % 3;
    let checkForFive = num % 5;
    
    // if the number is divisible by both 3 and 5, then print FizzBuzz
    if ( (checkForThree == 0) && (checkForFive == 0) ) 
        console.log( "FizzBuzz");
    
    // if the number is divisible by 3, then print Fizz
    else if (checkForThree == 0)
      console.log( "Fizz");
    
    // if the number is divisible by 5, then print Buzz
    else if (checkForFive == 0)
      console.log( "Buzz");
    
    // otherwise just print the number
    else
      console.log( num );
  } 