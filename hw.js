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
function calculateChange(amountPaid, amountCost){
    const denominations = [100,50,20,10,5,1];
    letchange = amountPaid - amountCost;
    const result = [];
    for (let denomination of denominations){
        if (change >= denomination){
        const numBills = Math.floor(change / denomination){
            result[denomination] = numBills;
            change -= numBills * denomination;
        }
        }
        return result;
    }
}
// 5.   Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
