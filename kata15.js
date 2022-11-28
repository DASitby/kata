const organizeInstructors = function(instructors) {
  let output = {}
  for(let i = 0; i < instructors.length;i++){
    if(instructors[i].course === 'Web'){
      output.Web = []
    }else if(instructors[i].course === 'iOS'){
      output.iOS = []
    }else if(instructors[i].course === 'Blockchain'){
      output.Blockchain = []
    }
  }
  for(let i = 0; i < instructors.length;i++){
    if(instructors[i].course === 'Web'){
      output.Web.push(instructors[i].name)
    }else if(instructors[i].course === 'iOS'){
      output.iOS.push(instructors[i].name)
    }else if(instructors[i].course === 'Blockchain'){
      output.Blockchain.push(instructors[i].name)
    }
  }
  return output
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));