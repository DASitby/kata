const urlEncode = function(text) {
  let output = text;
  let finalIndex = text.length-1;
  if(text[0] === ' ' && text[finalIndex] !== ' '){
    output = text.substring(1,finalIndex);
  }else if(text[0] === ' ' && text[finalIndex] === ' '){
    output = text.substring(1,finalIndex);
  }else if(text[0] !== ' ' && text[finalIndex] === ' '){
    output = text.substring(0,finalIndex-1);
  };
  let finalOutput = output.replace(/ /g, '%20');
  return finalOutput;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
