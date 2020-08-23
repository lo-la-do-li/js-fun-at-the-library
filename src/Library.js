function createLibrary(name) {
  var library = {}
  library.name = name
  library.shelves = {fantasy: [], fiction: [], nonFiction: []}
  return library
}

function addBook(library, book) {
library.shelves.fantasy.push(book)
  var shelvesArray = Object.keys(library.shelves)
  for (var i = shelvesArray.length - 1; i >= 0; --i) {
    if (shelvesArray[i] == book.genre) {
        console.log(shelvesArray[i]);
        library.shelves[shelvesArray[i]].push(book)
    }
  }
  // console.log(shelvesArray)
  return library
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  // checkoutBook: checkoutBook
};
