const instructorWithLongestName = function(instructors) {
  let winner = instructors[0]
  let highScore = instructors[0].name
  for(let i = 0;i < instructors.length;i++){
    contestant = instructors[i].name
    if(contestant.length > highScore.length){
      winner = instructors[i]
      highScore = contestant.length
    }
  }return winner
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
