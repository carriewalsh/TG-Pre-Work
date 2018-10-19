const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write you code below
for (let n = 0; n < rapperArray.length; n++) {
    console.log(rapperArray[n]); // has to be first
  if (rapperArray[n] === "Notorious B.I.G.") {
    break;
  }
}
console.log("And if you don\'t know, now you know.")


// I learned that break can be used when a loop is working to stop at a specific value, even if the original condition is still true.
