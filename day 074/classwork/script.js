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
  