const form = document.querySelector('.add-book');
const bookTitle = document.querySelector('.title');
const bookAuthor = document.querySelector('.author');
const bookList = document.querySelector('.book-list');

form.addEventListener('submit', addBook);
bookList.addEventListener('click', removeBook);
document.addEventListener('DOMContentLoaded',function(){
    let allBooks = storage.getBooksFromStorage()
    console.log(allBooks)
    allBooks.forEach(book=>ui.addBookToUI(book))
})

const ui = new UI();
const storage = new Storage();

function addBook(e) {
  let title = bookTitle.value;
  let author = bookAuthor.value;

  const newBook = new Book(title, author);

  storage.addCollection(newBook);

  ui.addBookToUI(newBook);
  ui.clearInputs(bookTitle, bookAuthor);

  e.preventDefault();
}

function removeBook(e) {
  if (e.target.className === 'remove') {
    ui.removeBookFromUI(e.target);
    storage.removeFromCollection(e.target);
  }
}
