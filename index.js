// Define the initial value of the cats array
const cats = ["Milo", "Otis", "Garfield"];

// Define the function to destructively append a cat to the end of the cats array
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Define the function to destructively prepend a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Define the function to destructively remove the last cat from the cats array
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Define the function to destructively remove the first cat from the cats array
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Define the function to append a cat to the cats array and return a new array, leaving the cats array unchanged
function appendCat(name) {
  const newCats = [...cats, name];
  return newCats;
}

// Define the function to prepend a cat to the cats array and return a new array, leaving the cats array unchanged
function prependCat(name) {
  const newCats = [name, ...cats];
  return newCats;
}

// Define the function to remove the last cat in the cats array and return a new array, leaving the cats array unchanged
function removeLastCat() {
  const newCats = cats.slice(0, -1);
  return newCats;
}

// Define the function to remove the first cat from the cats array and return a new array, leaving the cats array unchanged
function removeFirstCat() {
  const newCats = cats.slice(1);
  return newCats;
}

module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat,
};
