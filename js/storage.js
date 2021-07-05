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
    return this.collection
  } else {
    this.collection = JSON.parse(localStorage.getItem('collection'));
    return this.collection
  }
};
