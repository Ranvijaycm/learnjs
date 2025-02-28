console.log("Are you ready to play the game?");
console.log("doesnt matter, you are still going to play ");

let gameNum = 10;
let attempt =0;
let guess = 0;
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