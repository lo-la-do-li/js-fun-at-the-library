function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book)
  }
  return shelf
}

function unshelfBook(title, shelf) {
  for (var i = shelf.length - 1; i >= 0; --i) {
      if (shelf[i].title == title) {
          shelf.splice(i,1);
      }
  }
  return shelf
}

function listTitles(shelf) {
  var list = []
  for (var i = shelf.length - 1; i >= 0; --i) {
      list.unshift(shelf[i].title.toString())
  }
  var stringList = list.join(", ")
  return stringList
}

function searchShelf(shelf, title) {
  for (var i = shelf.length - 1; i >= 0; --i) {
    if (shelf[i].title == title) {
        return true;
    }
  }
  return false
}

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
