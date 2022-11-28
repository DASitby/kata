const camelCase = function(input){
  let output = input
  let modify = ''
  let capital = ''
  for(let i = 0; i < output.length;i++){
    if(output.charAt(i) === " "){
      modify = output.charAt(i+1)
      capital = modify.toUpperCase()
      output = output.substring(0,i) + capital + output.substring(i+2)
    }
  }return output
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
