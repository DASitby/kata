const generateBoard = function(queen1, queen2) {
  let output = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0]
  ]
  let queen1Y = queen1[0]
  let queen1X = queen1[1]
  let queen2Y = queen2[0]
  let queen2X = queen2[1]
  for(let i = 0;i < output.length;i++){
    if(queen1Y === i){
      for(let n = 0;n < output[i].length;n++){
        if(queen1X === n){
          output[i][n] = 1
        }
      }
    }
  }
  for(let i = 0;i < output.length;i++){
    if(queen2Y === i){
      for(let n = 0;n < output[i].length;n++){
        if(queen2X === n){
          output[i][n] = 1
        }
      }
    }
  }
  return output
};

const queenThreat = function(board){
  let queen1Y
  let queen1X
  let queen2Y
  let queen2X
  let xDifference
  let yDifference
  for(let i = 0;i < board.length;i++){
    for(let n = 0;n < board[i].length;n++){
      if(board[i][n] === 1){
        queen1Y = i
        queen1X = n
      }
    }
  }
  for(let i = 0;i < board.length;i++){
    for(let n = 0;n < board[i].length;n++){
      if(board[i][n] === 1 && i !== queen1Y && n !== queen1X){
        queen2Y = i
        queen2X = n
      }
    }
  }
  if(queen1X > queen2X){
    xDifference = queen1X - queen2X
  }else if(queen1X < queen2X){
    xDifference = queen2X - queen1X
  }else if(queen1X = queen2X){
    return true
  }
  if(queen1Y > queen2Y){
    yDifference = queen1Y - queen2Y
  }else if(queen1Y < queen2Y){
    yDifference = queen2Y - queen1Y
  }else if(queen1Y = queen2Y){
    return true
  }
  if(xDifference === yDifference){
    return true
  }else{
    return false
  }
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));