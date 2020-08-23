
function createTitle(bookIdea) {
  var modified = "The " + bookIdea
  return modified
}

function buildMainCharacter(name, age, pronouns) {
  var ghoulCharacter = {}
  ghoulCharacter.name = name
  ghoulCharacter.age = age
  ghoulCharacter.pronouns = pronouns
  return ghoulCharacter
}

function saveReview(review, reviews) {
  if (!reviews.includes(review)) {
    reviews.push(review)
  }
  return reviews
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20
}

function writeBook(bookTitle, bookCharacter, pageCount, genre) {
  var genre = 'fantasy'
  var book = {}
  book.title = bookTitle
  book.mainCharacter = bookCharacter
  book.pageCount = calculatePageCount(bookTitle)
  book.genre = genre
  return book
}

function editBook(ghoulBook) {
    ghoulBook.pageCount = calculatePageCount(ghoulBook.title) * .75;
    return ghoulBook
  }

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
