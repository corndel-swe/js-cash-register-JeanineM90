/**
 * Given a recipeBook containing recipes, returns the total number of servings in the book
 */
function countServings(recipeBook) {
  // code here
}

// we've provided a sample object for debugging:
const recipeBook = {
  title: 'My Recipe Book',
  recipes: [
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
}

// don't change below
export default countServings

/*
Similar to 2a- loop: count all of the servings of the recipes in the recipe book 
The values are 4 & 2, the key is "servings", the object is recipe book 
Return the sum of the values
e.g 

  let count = 0
  for (let recipe of recipes) { // loop through the recipes in the object
    if (recipe.isVegetarian == true) {
      count++
    }
  }
  return count
*/
