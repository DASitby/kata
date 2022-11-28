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
  let square = []
  for(let n = 0; n < squareSize;n++){
    square[n] = ''
    for(let i = n; i < message.length;i+=squareSize){
      square[n]+=(message.substring(i*squareSize,i*squareSize+squareSize))
    }
  }
  for(let i = 0;i<=square.length;i++){
    if(square[i] === ''){
      square.pop()
    }
  }
  //create encoded message
  for(let x = 0; x <= square.length;x++){
  for(let n = 0; n < square.length;n++){
    for(let i = x; i <= square.length;i+=squareSize){
      if(square[n][i] !== undefined){
        output += square[n][i]
      }
    }
    
  }
  output+= " "
  }
  return output
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
