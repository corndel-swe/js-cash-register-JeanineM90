/**
 * Given a recipeBook containing recipes, returns the title of the last recipe
 * in the array
 */
function lastRecipe(recipeBook) {
  // code here
  // return (recipeBook[1].name)
  // return the object.array[use length to return last recipe of array].key 
  return recipeBook.recipes[recipeBook.recipes.length - 1]?.name
}
// this was failing without the "?", this is used in conditional statements 

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
export default lastRecipe

/*
Return only string 'Vegetable Stir Fry', the name of recipe 2 
--
Object nesting in tech docs - chaining:
console.log(author.books[0].title) 
'The Handmaid's Tale' 
Which is the first in the list 
*/