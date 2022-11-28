const makeCase = function(input,x) {
  if(typeof x === 'string'){
    let output = input;
    let modify = '';
    let capital = '';
    if(x === 'camel'){
        for(let i = 0; i < output.length;i++){
          if(output.charAt(i) === " "){
            modify = output.charAt(i+1)
            capital = modify.toUpperCase()
            output = output.substring(0,i) + capital + output.substring(i+2)
          }
        }return output
    }else if(x === 'pascal'){
        modify = output.charAt(0)
        capital = modify.toUpperCase()
        output = capital + output.substring(1)
        for(let i = 1; i < output.length;i++){
          if(output.charAt(i) === " "){
            modify = output.charAt(i+1)
            capital = modify.toUpperCase()
            output = output.substring(0,i) + capital + output.substring(i+2)
          }
        }
        return output
    }else if(x === 'snake'){
        for(let i = 0; i < output.length;i++){
          if(output.charAt(i) === " "){
            output = output.substring(0,i) + "_" + output.substring(i+1)
          }
        }
        return output
    }else if(x === 'kebab'){
        for(let i = 0; i < output.length;i++){
          if(output.charAt(i) === " "){
            output = output.substring(0,i) + "-" + output.substring(i+1)
          }
        }
        return output
    }else if(x === 'title'){
        modify = output.charAt(0)
        capital = modify.toUpperCase()
        output = capital + output.substring(1)
        for(let i = 0; i < output.length;i++){
          if(output.charAt(i) === " "){
            modify = output.charAt(i+1)
            capital = modify.toUpperCase()
            output = output.substring(0,i+1) + capital + output.substring(i+2)
          }
        }
        return output
    };
    if(x === 'vowel'){
      for(let i = 0; i < output.length;i++){
        if(output.charAt(i) === "a"){
          modify = output.charAt(i)
          capital = modify.toUpperCase()
          output = output.substring(0,i) + capital + output.substring(i+1)
        }else if(output.charAt(i) === "e"){
          modify = output.charAt(i)
          capital = modify.toUpperCase()
          output = output.substring(0,i) + capital + output.substring(i+1)
        }else if(output.charAt(i) === "i"){
          modify = output.charAt(i)
          capital = modify.toUpperCase()
          output = output.substring(0,i) + capital + output.substring(i+1)
        }else if(output.charAt(i) === "o"){
          modify = output.charAt(i)
          capital = modify.toUpperCase()
          output = output.substring(0,i) + capital + output.substring(i+1)
        }else if(output.charAt(i) === "u"){
          modify = output.charAt(i)
          capital = modify.toUpperCase()
          output = output.substring(0,i) + capital + output.substring(i+1)
        } 
      }return output
    }else if(x === 'consonant'){
      for(let i = 0; i < output.length;i++){
        if(output.charAt(i) === "b"){
          modify = output.charAt(i)
          capital = modify.toUpperCase()
          output = output.substring(0,i) + capital + output.substring(i+1)
        }else if(output.charAt(i) === "c"){
          modify = output.charAt(i)
          capital = modify.toUpperCase()
          output = output.substring(0,i) + capital + output.substring(i+1)
        }else if(output.charAt(i) === "d"){
          modify = output.charAt(i)
          capital = modify.toUpperCase()
          output = output.substring(0,i) + capital + output.substring(i+1)
        }else if(output.charAt(i) === "f"){
          modify = output.charAt(i)
          capital = modify.toUpperCase()
          output = output.substring(0,i) + capital + output.substring(i+1)
        }else if(output.charAt(i) === "g"){
          modify = output.charAt(i)
          capital = modify.toUpperCase()
          output = output.substring(0,i) + capital + output.substring(i+1)
        }else if(output.charAt(i) === "h"){
          modify = output.charAt(i)
          capital = modify.toUpperCase()
          output = output.substring(0,i) + capital + output.substring(i+1)
        }else if(output.charAt(i) === "j"){
          modify = output.charAt(i)
          capital = modify.toUpperCase()
          output = output.substring(0,i) + capital + output.substring(i+1)
        }else if(output.charAt(i) === "k"){
          modify = output.charAt(i)
          capital = modify.toUpperCase()
          output = output.substring(0,i) + capital + output.substring(i+1)
        }else if(output.charAt(i) === "l"){
          modify = output.charAt(i)
          capital = modify.toUpperCase()
          output = output.substring(0,i) + capital + output.substring(i+1)
        }else if(output.charAt(i) === "m"){
          modify = output.charAt(i)
          capital = modify.toUpperCase()
          output = output.substring(0,i) + capital + output.substring(i+1)
        }else if(output.charAt(i) === "n"){
          modify = output.charAt(i)
          capital = modify.toUpperCase()
          output = output.substring(0,i) + capital + output.substring(i+1)
        }else if(output.charAt(i) === "p"){
          modify = output.charAt(i)
          capital = modify.toUpperCase()
          output = output.substring(0,i) + capital + output.substring(i+1)
        }else if(output.charAt(i) === "q"){
          modify = output.charAt(i)
          capital = modify.toUpperCase()
          output = output.substring(0,i) + capital + output.substring(i+1)
        }else if(output.charAt(i) === "r"){
          modify = output.charAt(i)
          capital = modify.toUpperCase()
          output = output.substring(0,i) + capital + output.substring(i+1)
        }else if(output.charAt(i) === "s"){
          modify = output.charAt(i)
          capital = modify.toUpperCase()
          output = output.substring(0,i) + capital + output.substring(i+1)
        }else if(output.charAt(i) === "t"){
          modify = output.charAt(i)
          capital = modify.toUpperCase()
          output = output.substring(0,i) + capital + output.substring(i+1)
        }else if(output.charAt(i) === "v"){
          modify = output.charAt(i)
          capital = modify.toUpperCase()
          output = output.substring(0,i) + capital + output.substring(i+1)
        }else if(output.charAt(i) === "w"){
          modify = output.charAt(i)
          capital = modify.toUpperCase()
          output = output.substring(0,i) + capital + output.substring(i+1)
        }else if(output.charAt(i) === "x"){
          modify = output.charAt(i)
          capital = modify.toUpperCase()
          output = output.substring(0,i) + capital + output.substring(i+1)
        }else if(output.charAt(i) === "y"){
          modify = output.charAt(i)
          capital = modify.toUpperCase()
          output = output.substring(0,i) + capital + output.substring(i+1)
        }else if(output.charAt(i) === "z"){
          modify = output.charAt(i)
          capital = modify.toUpperCase()
          output = output.substring(0,i) + capital + output.substring(i+1) 
      }
    }
    return output
    };
    if(x === 'upper'){
      for(let i = 0; i < output.length;i++){
        modify = output.charAt(i)
        capital = modify.toUpperCase()
        output = output.substring(0,i) + capital + output.substring(i+1)
      }return output
    }else if(x === 'lower'){
      for(let i = 0; i < output.length;i++){
        modify = output.charAt(i)
        capital = modify.toLowerCase()
        output = output.substring(0,i) + capital + output.substring(i+1)
      }return output
    };
  }else if(typeof x === 'object'){
    let output = input;
    let modify = '';
    let capital = '';
    for(let n = 0; n < x.length;n++){
      if(x[n] === 'camel'){
        for(let i = 0; i < output.length;i++){
          if(output.charAt(i) === " "){
            modify = output.charAt(i+1)
            capital = modify.toUpperCase()
            output = output.substring(0,i) + capital + output.substring(i+2)
          }
        }
      }else if(x[n] === 'pascal'){
          modify = output.charAt(0)
          capital = modify.toUpperCase()
          output = capital + output.substring(1)
          for(let i = 1; i < output.length;i++){
            if(output.charAt(i) === " "){
              modify = output.charAt(i+1)
              capital = modify.toUpperCase()
              output = output.substring(0,i) + capital + output.substring(i+2)
            }
          }
          
      }else if(x[n] === 'snake'){
          for(let i = 0; i < output.length;i++){
            if(output.charAt(i) === " "){
              output = output.substring(0,i) + "_" + output.substring(i+1)
            }
          }
          
      }else if(x[n] === 'kebab'){
          for(let i = 0; i < output.length;i++){
            if(output.charAt(i) === " "){
              output = output.substring(0,i) + "-" + output.substring(i+1)
            }
          }
          
      }else if(x[n] === 'title'){
          modify = output.charAt(0)
          capital = modify.toUpperCase()
          output = capital + output.substring(1)
          for(let i = 0; i < output.length;i++){
            if(output.charAt(i) === " "){
              modify = output.charAt(i+1)
              capital = modify.toUpperCase()
              output = output.substring(0,i+1) + capital + output.substring(i+2)
            }
          }
          
      };
      if(x[n] === 'vowel'){
        for(let i = 0; i < output.length;i++){
          if(output.charAt(i) === "a"){
            modify = output.charAt(i)
            capital = modify.toUpperCase()
            output = output.substring(0,i) + capital + output.substring(i+1)
          }else if(output.charAt(i) === "e"){
            modify = output.charAt(i)
            capital = modify.toUpperCase()
            output = output.substring(0,i) + capital + output.substring(i+1)
          }else if(output.charAt(i) === "i"){
            modify = output.charAt(i)
            capital = modify.toUpperCase()
            output = output.substring(0,i) + capital + output.substring(i+1)
          }else if(output.charAt(i) === "o"){
            modify = output.charAt(i)
            capital = modify.toUpperCase()
            output = output.substring(0,i) + capital + output.substring(i+1)
          }else if(output.charAt(i) === "u"){
            modify = output.charAt(i)
            capital = modify.toUpperCase()
            output = output.substring(0,i) + capital + output.substring(i+1)
          } 
        }
      }else if(x[n] === 'consonant'){
        for(let i = 0; i < output.length;i++){
          if(output.charAt(i) === "b"){
            modify = output.charAt(i)
            capital = modify.toUpperCase()
            output = output.substring(0,i) + capital + output.substring(i+1)
          }else if(output.charAt(i) === "c"){
            modify = output.charAt(i)
            capital = modify.toUpperCase()
            output = output.substring(0,i) + capital + output.substring(i+1)
          }else if(output.charAt(i) === "d"){
            modify = output.charAt(i)
            capital = modify.toUpperCase()
            output = output.substring(0,i) + capital + output.substring(i+1)
          }else if(output.charAt(i) === "f"){
            modify = output.charAt(i)
            capital = modify.toUpperCase()
            output = output.substring(0,i) + capital + output.substring(i+1)
          }else if(output.charAt(i) === "g"){
            modify = output.charAt(i)
            capital = modify.toUpperCase()
            output = output.substring(0,i) + capital + output.substring(i+1)
          }else if(output.charAt(i) === "h"){
            modify = output.charAt(i)
            capital = modify.toUpperCase()
            output = output.substring(0,i) + capital + output.substring(i+1)
          }else if(output.charAt(i) === "j"){
            modify = output.charAt(i)
            capital = modify.toUpperCase()
            output = output.substring(0,i) + capital + output.substring(i+1)
          }else if(output.charAt(i) === "k"){
            modify = output.charAt(i)
            capital = modify.toUpperCase()
            output = output.substring(0,i) + capital + output.substring(i+1)
          }else if(output.charAt(i) === "l"){
            modify = output.charAt(i)
            capital = modify.toUpperCase()
            output = output.substring(0,i) + capital + output.substring(i+1)
          }else if(output.charAt(i) === "m"){
            modify = output.charAt(i)
            capital = modify.toUpperCase()
            output = output.substring(0,i) + capital + output.substring(i+1)
          }else if(output.charAt(i) === "n"){
            modify = output.charAt(i)
            capital = modify.toUpperCase()
            output = output.substring(0,i) + capital + output.substring(i+1)
          }else if(output.charAt(i) === "p"){
            modify = output.charAt(i)
            capital = modify.toUpperCase()
            output = output.substring(0,i) + capital + output.substring(i+1)
          }else if(output.charAt(i) === "q"){
            modify = output.charAt(i)
            capital = modify.toUpperCase()
            output = output.substring(0,i) + capital + output.substring(i+1)
          }else if(output.charAt(i) === "r"){
            modify = output.charAt(i)
            capital = modify.toUpperCase()
            output = output.substring(0,i) + capital + output.substring(i+1)
          }else if(output.charAt(i) === "s"){
            modify = output.charAt(i)
            capital = modify.toUpperCase()
            output = output.substring(0,i) + capital + output.substring(i+1)
          }else if(output.charAt(i) === "t"){
            modify = output.charAt(i)
            capital = modify.toUpperCase()
            output = output.substring(0,i) + capital + output.substring(i+1)
          }else if(output.charAt(i) === "v"){
            modify = output.charAt(i)
            capital = modify.toUpperCase()
            output = output.substring(0,i) + capital + output.substring(i+1)
          }else if(output.charAt(i) === "w"){
            modify = output.charAt(i)
            capital = modify.toUpperCase()
            output = output.substring(0,i) + capital + output.substring(i+1)
          }else if(output.charAt(i) === "x"){
            modify = output.charAt(i)
            capital = modify.toUpperCase()
            output = output.substring(0,i) + capital + output.substring(i+1)
          }else if(output.charAt(i) === "y"){
            modify = output.charAt(i)
            capital = modify.toUpperCase()
            output = output.substring(0,i) + capital + output.substring(i+1)
          }else if(output.charAt(i) === "z"){
            modify = output.charAt(i)
            capital = modify.toUpperCase()
            output = output.substring(0,i) + capital + output.substring(i+1) 
        }
      }
      
      };
      if(x[n] === 'upper'){
        for(let i = 0; i < output.length;i++){
          modify = output.charAt(i)
          capital = modify.toUpperCase()
          output = output.substring(0,i) + capital + output.substring(i+1)
        }
      }else if(x[n] === 'lower'){
        for(let i = 0; i < output.length;i++){
          modify = output.charAt(i)
          capital = modify.toLowerCase()
          output = output.substring(0,i) + capital + output.substring(i+1)
        }
      };
    };
    return output;
  };
};
console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));