// Change to class
class Storage {
  constructor() {
    this.collection = [];
  }

  static addCollection(newBook) {
    this.collection.push(newBook);
    localStorage.setItem('collection', JSON.stringify(this.collection));
  }

  static removeFromCollection(target) {
    const removeBook =
      target.previousElementSibling.previousElementSibling.textContent;

    this.collection.filter((book, index) => {
      if (book.title === removeBook) {
        this.collection.splice(index, 1);
      }
      return this.collection;
    });
    localStorage.setItem('collection', JSON.stringify(this.collection));
  }

  static getBooksFromStorage() {
    if (localStorage.getItem('collection') === null) {
      this.collection = [];
    } else {
      this.collection = JSON.parse(localStorage.getItem('collection'));
    }
    return this.collection;
  }
}

