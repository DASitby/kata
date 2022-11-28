function containsOnlyNumbers(str) {
  return /^\d+$/.test(str);
}
let prompt = require("prompt-sync")();
let number = Math.floor(Math.random() * 100);
let guesses = 0;
let guessed = [-1]
let right = false;
let freshAnswer
while(right === false){
  let answer = prompt("Guess a number: "); 
  console.log("You have answered: "+ answer)
  if(containsOnlyNumbers(answer) === true){
    answer = Number(answer)
    for(let i = 0; i < guessed.length;i++){
      if(guessed[i] === answer){
        console.log("Already Guessed!")
        guesses --
      }else{
        freshAnswer = answer
      }
    }
    guessed.push(freshAnswer)
  }else{
    console.log('Not a number! Try again!')
  }   
  if(freshAnswer > number){
    console.log("Too high");
    guesses ++;
  }else if(freshAnswer < number){
    console.log('Too low');
    guesses ++;
  }else if(freshAnswer === number){
    guesses ++;
    right = true
  }
}
console.log('You got it! You took ' + guesses + ' attempts!')