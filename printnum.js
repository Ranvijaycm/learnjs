// for(let i =1;i<=10;i++) {
//     console.log(i);
// }

// program to calculate sum of first 10 numbers
// let sum = 0;
// for(let i = 1;i<=10;i++) {
//     sum+=i;
// }

// console.log("sum = ", sum); 


// let i=1;
// while(i<=10){
//     i+=i;
// }

// console.log("sum = ", i);

// print 1 to 5
 
// let i = 1;
// while(i<=10){
//     console.log(i);
//     i++;
// }
// console.log("program terminated");

// let i = 1;
// do {
//     console.log(i);
//     i++;
// }
// while (i <10);

//print 0 to 100

// let num = 0;

// for(let i = 0;i<=100;i++) {
//     console.log(i);

// }
// console.log("the code is terminated");

//prin teven numbers from 1 to 100

// console.log("even numbers");
// for(i=0;i<100;i++) {

//     if(i%2==0){
        
//         console.log(i);
//     }
// }
// console.log("rest all are odd");

// guess the number
console.log("Are you ready to play the game?");
console.log("doesnt matter, you are still going to play ");

let gameNum = 10;
let attempt =0;
let guess;
while(guess != gameNum){
    guess = Number(prompt(`Guess The number. no of attempts done =${attempt}`));
    attempt = attempt + 1;
    if(guess == gameNum){
        alert(`Congratulations, you got it right in ${attempt}`);
            break;
        }
            else
            console.log("wrong");


    }




