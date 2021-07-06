// Change to class
class UI {
  static addBookToUI(newBook) {
    bookList.innerHTML += `
          <li class='book'>
            <p class='book-title margin-sm'>${newBook.title}</p>
            <p class='book-author margin-sm'>${newBook.author}</p>
            <button class='remove' type='button'>Remove</button>
            <hr />
          </li>
      `;
  }

  static clearInputs(element1, element2) {
    element1.value = '';
    element2.value = '';
  }

  static removeBookFromUI(target) {
    target.parentElement.remove();
  }
}
