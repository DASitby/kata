const repeatNumbers = function(data) {
  let output = []
  let cell
  let numberToRepeat
  let repeated = ''
  for(let i = 0;i < data.length;i++){
    cell = data[i]
    numberToRepeat = cell[0]
    for(let n = 0; n < cell[1];n++){
      repeated += numberToRepeat
    }
    output[i] = repeated
  }
  let outputString = output.toString()
  let search = '\\,'
  let searchRegExp = new RegExp(search, 'g')
  let finalOutput = outputString.replace(searchRegExp,", ")
  return finalOutput
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
