const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  function isAt(ingredient, bakery){
    let output = false
    for(let i = 0; i < bakery.length;i++){
      if(ingredient === bakery[i]){
        output = true
      }
    }
    return output
  }
  for(let i = 0; i < recipes.length;i++){
    if(isAt(recipes[i].ingredients[0],bakeryA) && isAt(recipes[i].ingredients[1],bakeryB)){
      return recipes[i].name
    }else if(isAt(recipes[i].ingredients[1],bakeryA) && isAt(recipes[i].ingredients[0],bakeryB)){
      return recipes[i].name
    }
  }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
