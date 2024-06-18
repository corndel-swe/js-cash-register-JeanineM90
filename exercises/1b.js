/**
 * This function changes the recipeBook's name to the newName
 * and then returns the updated recipeBook
 * e.g. renameBook(recipeBook, "Good eats") => { title: 'Good eats' }
 */
function renameBook(recipeBook, newName) {
  // code here
  recipeBook.title = newName
  return recipeBook
}

// we've provided a sample object for debugging:
const recipeBook = {
  title: 'My Recipe Book',
  recipes: []
}

// don't change below
export default renameBook

/*
renameBook Function to update the value, then return the new value 
Title for recipeBook 'My Recipe Book' to become "Good eats" 

--

Tech docs: Updating properties- Assign a variable 
book.isAvailable = false
*/