// Write your code below
// Write your code below
bobsFollowers = ["Tim", "Jon", "Ned", "Gary"]
tinasFollowers = ["Jon", "Debbie", "Ned"]
mutualFollowers = []
for (i = 0; i < bobsFollowers.length; i++) {
    for (j = 0; j < tinasFollowers.length; j++)
 {
    if (bobsFollowers[i] === tinasFollowers[j]) {
    mutualFollowers.push(bobsFollowers[i])
    console.log(`Both people are friends with: ${mutualFollowers}`)
  };
  };
};

// I learned that looped loops can be a little tough at first, but they are much easier in JS. It's a great way to compare assays.
