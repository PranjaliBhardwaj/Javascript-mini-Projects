const max = prompt("enter the max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while(true) {
    if(guess == "quit") {
        console.log("user.quit");
        break;
    }

    if(guess == random) {
        console.log("you are right! congrats!! Random numbner was", random);
        break;
    } else if(guess < random){
        prompt("Your guess was small.");
    }
    else {
        prompt("Your guess was large.");
    }
}
