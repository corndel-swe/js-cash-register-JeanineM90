/**
 * Given a list of recipes, return the number of vegetarian recipes in the list
 */
function countVeggies(recipes) {
  // code here
  /*
   initialize a counter variable
   loop through all the recipes in the list
   if isVegetarian, then add 1 to counter
   return counter
  */

  let count = 0
  for (let recipe of recipes) { // loop through the recipes in the object
    if (recipe.isVegetarian == true) {
      count++
    }
  }
  return count
}

// array provided for debugging:
const recipes = [
  {
    name: 'Spaghetti Bolognese',
    ingredients: ['spaghetti', 'beef', 'tomato sauce'],
    servings: 4,
    isVegetarian: false
  },

  {
    name: 'Vegetable Stir Fry',
    ingredients: ['broccoli', 'carrots', 'bell peppers', 'soy sauce'],
    servings: 2,
    isVegetarian: true
  }
]

// don't change below
export default countVeggies

/*
Array [] 0,1 with objects e.g recipes[0].name
Use loop to see if isVegetarian is true, then add true values to count
Tech docs: lists of objects- using loops, e.g;

let count = 0

for (let book of books) {
  if (book.year < 2000) {
    count++
  }
}

*/
