const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList);
groceryList.unshift("popcorn");
console.log(groceryList);

console.log(groceryList.slice(1,4))
console.log(groceryList)

console.log(groceryList.indexOf("pasta"))
const pastaIndex = groceryList.indexOf("pasta")
console.log(pastaIndex)


// I learned that .shift removes the first item and unshift adds an item to the beginning. I also learned that .slice doesn't change the array, but returns a section of it.
