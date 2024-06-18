import { drawer } from '../drawer.js'

// Level 1

/**
 * Goes into the given drawer and removes 1 item with the given name.
 * E.g. ('penny', drawer) removes 1 penny from the given drawer.
 * @param {string} name - the name of the currency to remove
 * @param {object[]} drawer - the drawer of currency
 * @returns {object[]} - the drawer, after removing the item
 */
export function removeItem(name, drawer) {
  /*code here
    navigate to drawer - go though each item in the drawer to find what we're looking for (for loop)
    use the name find the relevant object in the drawer array
    deduct 1 from the quantity field of the relevant object
    return the drawer
  */

  for (let item of drawer) {
    if (item.name == name) {
      item.quantity--
    }
  }

  return drawer
}

/* e.g { name: 'penny', value: 1, quantity: 72 }
Object is drawer, key is name, value is penny 
Return quantity 71 

  removeItem('penny', drawer)
  console.log(drawer)
*/

/**
 * The same as removeItem but adds an item of currency instead
 * @param {string} name
 * @param {object[]} drawer
 * @returns {object[]}
 */
export function addItem(name, drawer) {
  // code here

  for (let item of drawer) {
    if (item.name == name) {
      item.quantity++
    }
  }

  return drawer
}
