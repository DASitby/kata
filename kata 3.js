const numberOfVowels = function(data) {
  let output = 0
  for(let i = 0;i < data.length;i++){
    if(data[i] === 'a'){
      output++
    }else if(data[i] === 'e'){
      output++
    }else if(data[i] === 'i'){
      output++
    }else if(data[i] === 'o'){
      output++
    }else if(data[i] === 'u'){
      output++
    }
  }return output
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
