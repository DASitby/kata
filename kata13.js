const talkingCalendar = function(date) {
  let year = date.substring(0,4)
  let monthNum = date.substring(5,7)
  let day = date.substring(8,10)
  let dayAppend
  let monthName
  switch(monthNum){
    case '01':
      monthName = "January"
      break;
    case '02':
      monthName = "February"
      break;
    case '03':
      monthName = "March"
      break;
    case '04':
      monthName = "April"
      break;
    case '05':
      monthName = "May"
      break;
    case '06':
      monthName = "June"
      break;
    case '07':
      monthName = "July"
      break;
    case '08':
      monthName = "August"
      break;
    case '09':
      monthName = "September"
      break;
    case '10':
      monthName = "October"
      break;
    case '11':
      monthName = "November"
      break;
    case '12':
      monthName = "December"
      break;
  }
  switch(day[1]){
    case '1':
      dayAppend = day+'st'
      break;
    case '2':
      dayAppend = day+'nd'
      break;
    case '3':
      dayAppend = day+'rd'
      break;
    default:
      dayAppend = day+'th'
      break;
  }
  if(dayAppend === '11st'){
    dayAppend ='11th'
  }
  if(dayAppend[0] === '0')
    dayAppend = dayAppend.substring(1,dayAppend.length)
  return monthName + ' ' + dayAppend + ', ' + year
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));