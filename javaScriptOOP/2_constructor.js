// Constractor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}


Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`
}

// Instatiate an Object
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2016');
// console.log(book1.getSummary());
console.log(book1.getAge());