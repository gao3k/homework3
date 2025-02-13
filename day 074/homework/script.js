class Book {
    constructor(title, author, yearPublished) {
      this.title = title;
      this.author = author;
      this.yearPublished = yearPublished;
    }
  
    get info() {
      return `${this.title} by ${this.author}, published in ${this.yearPublished}`;
    }
  
    static classify() {
      return "Book";
    }
  }
  class EBook extends Book {
    constructor(title, author, yearPublished, fileSize) {
      super(title, author, yearPublished);
      this.fileSize = fileSize;
    }
  
    get info() {
      return `${super.info()}, file size: ${this.fileSize} MB`;
    }
  
    static classify() {
      return "E-Book";
    }
  }
  const myBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
  console.log(myBook.info); // The Great Gatsby by F. Scott Fitzgerald, published in 1925
  
  const myEBook = new EBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, 2);
  console.log(myEBook.info); // The Great Gatsby by F. Scott Fitzgerald, published in 1925, file size: 2 MB
      