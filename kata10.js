const multiplicationTable = function(maxValue) {
  let table = []
  let row = []
  let newRow = []
  for(let i = 0;i < maxValue; i++){
    row[i] = i+1
  }
  for(let n = 0; n < maxValue;n++){
    newRow = row.map(function(x){return x * (n+1)})
    table[n] = newRow
  }return table
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
