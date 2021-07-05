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

UI.prototype.clearInputs = function (element1, element2) {
  element1.value = '';
  element2.value = '';
};

UI.prototype.removeBookFromUI = function (target) {
  target.parentElement.remove();
};
