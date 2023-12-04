let libraryBooks = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 }
];
    
//1a. Question 1a addBook

function addBook(title, author, libraryId) {
    let newBook={title, author, libraryId }
    libraryBooks.push(newBook);
    return newBook;
}
// printing to the console
console.log(libraryBooks);
console.log(addBook("The Warrior", "Alley", 123));

// 1b. Question 1b get all the titles 

function getTitles(books) {
    let titles = books.map(book => book.title);
   
    let sorted=titles.sort();
    return sorted;
}
// testing the solution 
console.log(getTitles(libraryBooks));

// 1c. Quesion 2c
function findBooks(bookTitle) {
    let foundBooks = libraryBooks.filter(book => book.title.includes(bookTitle));
    // when refering, I found a method called localeCompare that canbe used inside the sort
    let sortedBooks = foundBooks.sort((book1, book2) => book1.author.localeCompare(book2.author));
    return sortedBooks;
}
// testing 
console.log(findBooks('The Road Ahead'));


