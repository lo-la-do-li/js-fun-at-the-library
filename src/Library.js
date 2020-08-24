function createLibrary(name) {
  var library = {}
  library.name = name
  library.shelves = {fantasy: [], fiction: [], nonFiction: []}
  return library
}

// WORKS! but *Refactor*
// function addBook(library, book) {
// // library.shelves.fantasy.push(book)
//   var shelvesArray = Object.keys(library.shelves)
//   for (var i = shelvesArray.length - 1; i >= 0; --i) {
//     if (shelvesArray[i] == book.genre) {
//         library.shelves[shelvesArray[i]].push(book)
//     }
//   }
//   return library
// }

function addBook(library, book) {
  var shelvesGenre = Object.keys(library.shelves)
  if (shelvesGenre.includes(book.genre)) {
    library.shelves[book.genre].push(book)
  }
  return library
}

function checkoutBook(library, book) {
  for (var i = 0; i < library.shelves.fiction.length; i++) {
    if (library.shelves.fiction[i].title === book) {
      library.shelves.fiction.splice(i, 1)
    return `You have now checked out ${book} from the Denver Public Library`
    }
  }
  for (var i = 0; i < library.shelves.nonFiction.length; i++) {
    if (library.shelves.nonFiction[i].title === book) {
      library.shelves.nonFiction.splice(i, 1)
    return `You have now checked out ${book} from the Denver Public Library`
  }
}
    for (var i = 0; i < library.shelves.fantasy.length; i++) {
      if (library.shelves.fantasy[i].title === book) {
        library.shelves.fantasy.splice(i, 1)
      return `You have now checked out ${book} from the Denver Public Library`
    }
  }
    return `Sorry, there are currently no copies of ${book} available at the Denver Public Library`
}
// This is a lot of attempted code...
// function checkoutBook(library, book) {
//   var hash = [];
  // for (var i = shelvesArray.length - 1; i >= 0; --i) {
  //   library.shelvesArray[book.title].splice(book, 1)
//     for (var i = shelvesArray[i].length - 1; i >= 0; --i) {
//         hash.push(shelvesArray[i])
//       }
  // }
//   var bookIndex = -1;
// for(var i=0; i< hash[0].length; i++) {
// 	if( hash[0][i].title == book) {
// 		// __FOUND is set to the index of the element
//
// 		bookIndex= i;
// //     hash.splice(bookIndex, 1)
//     return "You have now checked ou Pride and Prejudice from the Denver Public Library"
// 		// break;
	// }
// }

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
