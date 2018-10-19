const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = "Sirius"
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars)


// I learned that clogging up global variables can be a problem. It's actually better to more often have variables be in specific blocks instead of global.
