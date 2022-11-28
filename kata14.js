const calculateChange = function(total, cash) {
  let change = {
    twentyDollar: 0,
    tenDollar: 0,
    fiveDollar: 0,
    twoDollar: 0,
    oneDollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0
  }
  let result = cash - total
  if(result > 2000 && (result % 2000) > 1){
    change.twentyDollar = Math.floor(result / 2000)
    result = result % 2000
  }
  if(result > 1000 && (result % 1000) > 1){
    change.tenDollar = Math.floor(result / 1000)
    result = result % 1000
  }
  if(result > 500 && (result % 500) > 1){
    change.fiveDollar = Math.floor(result / 500)
    result = result % 500
  }
  if(result > 200  && (result % 200) > 1){
    change.twoDollar = Math.floor(result / 200)
    result = result % 200
  }
  if(result > 100 && (result % 100) > 1 ){
    change.oneDollar = Math.floor(result / 100)
    result = result % 100
  }
  if(result > 25 && (result % 25) > 1 ){
    change.quarter = Math.floor(result / 25)
    result = result % 25
  }
  if(result > 10  && (result % 10) > 1 ){
    change.dime = Math.floor(result / 10)
    result = result % 10
  }
  if(result / 5 > 0 && (result % 5) !== 0 ){
    change.nickel = Math.floor(result / 5)
    result = result % 5
  }
  if(result / 1 > 0){
    change.penny = result / 1
    result = result % 1
  }
  return change
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));