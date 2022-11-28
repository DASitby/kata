const squareCode = function(message) {
  let output = ''
  //remove spaces
  for(let i = 0;i < message.length;i++){
    if(message[i] === ' '){
      message = message.substring(0,i) + message.substring(i+1)
    }
  }
  //get square size
  let squareSize = Math.ceil(Math.sqrt(message.length))
  //create initial square
  for(let i = squareSize; i < message.length;i += squareSize+1){
    message = message.substring(0,i) + '\n' + message.substring(i)
  }
  let square = message
  return square
  //create encoded message
  
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
