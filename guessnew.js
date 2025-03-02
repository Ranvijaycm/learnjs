let oNum =7;
let guessNum =0;
alert("Lets begin this game");
guessNum = prompt("enter your guess number");

while(guessNum!=oNum){
    prompt("Try again");
}
console.log(`congratulation you got it right. It is indeed${oNum}!`);