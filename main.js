const form = document.querySelector('.add-book');
const bookTitle = document.querySelector('.title');
const bookAuthor = document.querySelector('.author');
const bookList = document.querySelector('.book-list');

// functions
function addBook(e) {
  const title = bookTitle.value;
  const author = bookAuthor.value;

  const newBook = new Book(title, author);

  Storage.addCollection(newBook);

  UI.addBookToUI(newBook);
  UI.clearInputs(bookTitle, bookAuthor);

  e.preventDefault();
}

function removeBook(e) {
  if (e.target.className === 'remove') {
    UI.removeBookFromUI(e.target);
    Storage.removeFromCollection(e.target);
  }
}

// addEventListeners
form.addEventListener('submit', addBook);
bookList.addEventListener('click', removeBook);
document.addEventListener('DOMContentLoaded', () => {
  const allBooks = Storage.getBooksFromStorage();
  allBooks.forEach((book) => UI.addBookToUI(book));
});
