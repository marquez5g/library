const container = document.getElementById('container');
const addBookForm = document.getElementById('add-book')
addBookForm.addEventListener('submit', addBook);
let library = [];
/**
 * Saves a new book to a collection
 * @function
 * @param {node} book HTML form with book info to be saved
 */
 function addBook (event) {
    event.preventDefault();
    console.log('Form submission cancelled.', event);
    let book = new FormData(event.target);
    const title = book.get('title');
    const author = book.get('author');
    const year = book.get('year');
    const read = book.get('read');
    let newBook = new Book(title, author, year, read);
    library.push(newBook);
    displayLibrary();
}

/**
 * Displays last book of the library array into the DOM
 * @function
 * 
 */
function displayLibrary(){
    let book = library[library.length - 1];
    let bookContainer = document.createElement('div');
    let title = document.createElement('div');
    let titleTooltip = document.createElement('dfn');
    titleTooltip.setAttribute('title', book.title);
    titleTooltip.appendChild(document.createTextNode(book.title));
    title.setAttribute('class', 'book_title');
    title.appendChild(titleTooltip);
    let author = document.createElement('div');
    author.setAttribute('class', 'book_author');
    author.appendChild(document.createTextNode(book.author));
    let year = document.createElement('div');
    year.setAttribute('class', 'book_year');
    year.appendChild(document.createTextNode(book.year));
    let isRead = book.read ? 'book read' : 'book';
    bookContainer.setAttribute('class',isRead);
    bookContainer.appendChild(title, author, year);
    bookContainer.appendChild(author);
    bookContainer.appendChild(year);
    container.appendChild(bookContainer);    
}
/** 
 * Represents a book in the library
 * @constructor
 * @param {string} title - Title of the book
 * @param {string} author - Name of the author
 * @param {boolean} read - Indicates if book ahs been read
 * @param {number} year - Year of publication
 */
function Book(title, author, year, read){
    this.title = title,
    this.author = author,
    this.year = year,
    this.read = read
}