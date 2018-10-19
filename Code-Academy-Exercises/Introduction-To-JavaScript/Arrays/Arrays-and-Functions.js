const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept)
function removeElement(newArr) {
  newArr.pop()
}
removeElement(concept)
console.log(concept)


const my_list = [0, 1, 2];
console.log(my_list);
function changeList(a_list) {
  a_list[2] = "changed!";
}

changeList(my_list);
console.log(my_list);

function removeItem(newArrr) {
	newArrr.pop()
}
removeItem(my_list)
console.log(my_list)

// I learned that a a fuction can change an array globally. Arrays are kind of like a memory that functions can change.
