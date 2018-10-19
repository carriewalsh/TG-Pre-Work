const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard = ""
    while (currentCard !== "spade") {
      currentCard = cards[Math.floor(Math.random() * 4)];
      console.log(currentCard)
    }

// I learned that math.random is a good way to randomly select an item in an array. More importantly, while loops will continue until the condition becomes false. Maybe even more importantly, I learned to avoid infinite loops.
