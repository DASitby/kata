const conditionalSum = function(values, condition) {
  let toAdd = [];
  let outputSum = 0;
  if(condition === "even"){
    for(let i = 0; i < values.length;i++){
      if(values[i] % 2 === 0){
        toAdd.push(values[i]);
      }
    }
  }else if(condition === "odd"){
    for(let i = 0; i < values.length;i++){
      if(values[i] % 2 !== 0){
        toAdd.push(values[i]);
      }
    }
  }for(let n = 0;n < toAdd.length;n++){
    outputSum+=toAdd[n];
  }return outputSum
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
