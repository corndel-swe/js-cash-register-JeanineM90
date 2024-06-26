/**
 * Accepts a recipe object and returns a summary string as below:
 * "Spaghetti Bolognese has 3 ingredients and serves 4 people"
 * "Vegetable Stir Fry has 4 ingredients and serves 2 people"
 */
function recipeSummary(recipe) {
  // code here
  // return recipe.recipeSummary vales e.g name
  // string formatting `${}` to call variable: return `${recipe.recipeSummary}`
  return `${recipe.name} has ${recipe.ingredients.length} ingredients and serves ${recipe.servings} people`
}

// We have provided two recipes for debugging:
const recipe1 = {
  name: 'Spaghetti Bolognese',
  ingredients: ['spaghetti', 'beef', 'tomato sauce'],
  servings: 4,
  isVegetarian: false
}

const recipe2 = {
  name: 'Vegetable Stir Fry',
  ingredients: ['broccoli', 'carrots', 'bell peppers', 'soy sauce'],
  servings: 2,
  isVegetarian: true
}

const result = recipeSummary(recipe1)
console.log(result)

// don't change below:
export default recipeSummary

/* needs to return the correct recipeSummary (function) for recipe1 and recipe2
Takes recipe object, returns string:
Call recipeSummary, pass in the object, return will be the value 
-- 
Another way:
const{name, ingredients, servings} = recipe 
return `${name} has ${ingredients.length} ingredients and serves ${servings} people`
Another way:
const summary = `${name} has ${ingredients.length} ingredients and serves ${servings} people`
return summary 
*/
