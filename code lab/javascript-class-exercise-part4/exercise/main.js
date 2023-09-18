/*Objective: Integrate multiple concepts: classes, methods, and private fields.

Instructions:

As a challenge, design a Library class. This class should be able to store book objects.
For book objects, you should have a Book class. This class should have private fields for ISBN and public fields like title, author, and yearPublished.
The Library should feature methods that allow a user to add a book, remove a book, and list all books.
Implement this system and run a series of operations, such as adding a book, listing books, etc.*/
class Book {
  #isbn; // Private field for ISBN
  title;
  author;
  yearPublished;

  constructor(isbn, title, author, yearPublished) {
    this.#isbn = isbn;
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
  }

  get isbn() {
    return this.#isbn;
  }
}

class Library {
  books = [];

  addBook(book) {
    if (book instanceof Book) {
      this.books.push(book);
      console.log(`Added book with ISBN ${book.isbn}`);
    } else {
      console.log("Invalid book object.");
    }
  }

  removeBook(isbn) {
    const index = this.books.findIndex((book) => book.isbn === isbn);
    if (index !== -1) {
      this.books.splice(index, 1);
      console.log(`Removed book with ISBN ${isbn}`);
    } else {
      console.log(`Book with ISBN ${isbn} not found.`);
    }
  }

  listBooks() {
    console.log("Library Books:");
    this.books.forEach((book) => {
      console.log(
        `ISBN: ${book.isbn}, Title: ${book.title}, Author: ${book.author}, Year Published: ${book.yearPublished}`
      );
    });
  }
}

const book1 = new Book("ISBN001", "Book 1", "Author 1", 2022);
const book2 = new Book("ISBN002", "Book 2", "Author 2", 2020);
const book3 = new Book("ISBN003", "Book 3", "Author 3", 2023);
const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.listBooks();

library.removeBook("ISBN002");

library.listBooks();

/*
Exercise #8
Create a class Student with properties name and grades. Implement methods to add grades and compute the average. How does the this keyword behave differently in arrow functions compared to regular functions?

*/

class Student {
  name;
  grades = [];
  constructor(name) {
    this.name = name;
  }

  addGrades(grade) {
    this.grades.push(grade);
  }

  average() {
    let sum = this.grades.reduce((a, b) => a + b);
    return sum / this.grades.length;
  }
}

let student = new Student("Tom");
student.addGrades(1);
student.addGrades(2);
student.addGrades(4);
student.addGrades(6);

console.log(student.average());
