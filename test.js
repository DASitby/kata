const blocksAway = function(directions) {
  let xPosition = 0
  let yPosition = 0
  let heading = 'north'
  let output = {}  
  for(let i = 0;i < directions.length;i++){
    if(typeof directions[i] === 'string'){
      if(heading === 'north'){
        if(directions[i] === 'right'){
          heading = 'east'
        }else if(directions[i] === 'left'){
          heading = 'west'
        }
      }else if(heading === 'south'){
        if(directions[i] === 'right'){
          heading = 'west'
        }else if(directions[i] === 'left'){
          heading = 'east'
        }
      }else if(heading === 'east'){
        if(directions[i] === 'right'){
          heading = 'south'
        }else if(directions[i] === 'left'){
          heading = 'north'
        }
      }else if(heading === 'west'){
        if(directions[i] === 'right'){
          heading = 'north'
        }else if(directions[i] === 'left'){
          heading = 'south'
        }
      }
    }else if(typeof directions[i] === 'number'){
      if(heading === 'north'){
        yPosition += directions[i]
      }else if(heading === 'south'){
        yPosition -= directions[i]
      }else if(heading === 'east'){
        xPosition += directions[i]
      }else if(heading === 'west'){
        xPosition -= directions[i]
      }
    }
  }
  
  //This code would work for East/West/North/South, but the exercise only wanted North/East so I commented it out.
  //if(xPosition >= 0){
  //  output.east = xPosition
  //}else if(xPosition < 0){
  //  xPosition = Math.abs(xPosition)
  //  output.west = xPosition
  //}
  //if(yPosition >= 0){
  // output.north = yPosition
  //}else if(yPosition < 0){
  //  yPosition = Math.abs(yPosition)
  //  output.south = yPosition
  //}
  // If you wish to use it, erase the 2 lines below.
  output.east = Math.abs(xPosition)
  output.north = Math.abs(yPosition)
  return output
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

