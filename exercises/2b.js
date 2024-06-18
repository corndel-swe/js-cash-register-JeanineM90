/**
 * Given an array of recipes, return a new array of strings containing
 * the name of each recipe
 */
function listNames(recipes) {
  // code here
  return recipes.map(recipe => recipe.name)
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
export default listNames

/*
Similar to 2a in that it needs to go through an array of two objects
Input array, output is array containing strings (the names of the recipies)
So results should be 'Spaghetti Bolognese' & 'Vegetable Stir Fry'

--

Transform objects into strings- tech docs: transforming with map;
select particular properties from each object

const bookTitles = books.map(book => book.title)
Output is book titles 

Map is a function that transforms objects 
Find name, don't return anything else 
*/