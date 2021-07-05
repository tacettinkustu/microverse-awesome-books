const form = document.querySelector('.add-book');
const bookTitle = document.querySelector('.title');
const bookAuthor = document.querySelector('.author');
const bookList = document.querySelector('.book-list');

function UI() {}

UI.prototype.addBookToUI = function (newBook) {
  bookList.innerHTML += `
        <li class='book'>
          <p class='book-title margin-sm'>${newBook.title}</p>
          <p class='book-author margin-sm'>${newBook.author}</p>
          <button class='remove' type='button'>Remove</button>
          <hr />
        </li>
    `;
};

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function Storage() {
  this.collection = [];
}

Storage.prototype.addCollection = function (newBook) {
  this.collection.push(newBook);
  localStorage.setItem('collection', JSON.stringify(this.collection));
};

Storage.prototype.removeFromCollection = function (target) {
  const removeBook =
    target.previousElementSibling.previousElementSibling.textContent;

  this.collection.filter((book, index) => {
    if (book.title === removeBook) {
      this.collection.splice(index, 1);
    }
  });
  localStorage.setItem('collection', JSON.stringify(this.collection));
};

Storage.prototype.getBooksFromStorage = function () {
  if (localStorage.getItem('collection') === null) {
    this.collection = [];
  } else {
    this.collection = JSON.parse(localStorage.getItem('collection'));
    return this.collection;
  }
};

UI.prototype.clearInputs = function (element1, element2) {
  element1.value = '';
  element2.value = '';
};

UI.prototype.removeBookFromUI = function (target) {
  target.parentElement.remove();
};

const ui = new UI();
const storage = new Storage();

function addBook(e) {
  const title = bookTitle.value;
  const author = bookAuthor.value;

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

form.addEventListener('submit', addBook);
bookList.addEventListener('click', removeBook);
document.addEventListener('DOMContentLoaded', function () {
  const allBooks = storage.getBooksFromStorage();
  console.log(allBooks);
  allBooks.forEach((book) => ui.addBookToUI(book));
});
