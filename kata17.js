const urlDecode = function(text) {
  let output = {}
  //Change %20 into space
  for(let i = 0;i < text.length;i++){
    if(text[i] === '%')
    text = text.substring(0,i) + " " + text.substring(i+3)
  }
  //Create Properties
  let property
  let value
  let next = ''
  for(let i = 0; i < text.length;i++){ 
    if(text[i] === '='){
      property = text.substring(0,i)
      value = text.substring(i+1)
      for(let n = 0; n < value.length;n++){
        if(value[n] === '&'){
          value = value.substring(0,n)
        } 
      }
    for(let n = 0; n < property.length;n++){
      if(property[n] === '&'){
        property = property.substring(n+1)
      } 
    }
    output[property] = value
    }
  }
  return output
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
