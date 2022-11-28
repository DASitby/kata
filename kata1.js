const sumLargestNumbers = function(data) {
  let x = data[0];
  let y = data[1];
  if(data.length<=2){
    return x + y;
  }else{
    for(let i = 0;i<data.length;i++){
      if(data[i]>x){
        x = data[i]
      }
      }
    for(let n = 0;n<data.length;n++){
      if(data[n]>y && data[n] != x){
        y = data[n]
      }
    }
    }
    return x + y
  }

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
