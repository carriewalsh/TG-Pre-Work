var satellite = "The Moon"
var galaxy = "The Milky Way"
var stars = "North Star"

function callMyNightSky() {
  return "Night Sky: " + satellite + ", " + stars + ", and " + galaxy;
};
console.log(callMyNightSky())

// `Night sky: ${satellite}, ${stars}, ${galaxy}.`; Okay this should have passed!?!?!?!?


// I learned that sometimes Codecademy doesn't pass you if you don't get exactly what it's looking for, even if your code works. I also learned that those global variables can be accessed anytime
