/**
 * Given a recipeBook containing recipes, returns the total number of servings in the book
 */
function countServings(recipeBook) {
  // code here
  /* use reduce? the sum of a list in tech docs example:

  const numbers = [1, 2, 3, 4, 5]

  function sum(accumulator, currentValue) {
  return accumulator + currentValue
}
  const total = numbers.reduce(sum, 0)

  Or
  const total = numbers.reduce((acc, curr) => acc + curr, 0)
  */



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
Return the sum of the values which will be 6 
However 2a checks a boolean, we now need to sum numbers 

--

Tech Docs for array reduce:
function aggregateFunction(accumulator, currentValue) {
}
const result = list.reduce(aggregateFunction, initialValue)
*/
