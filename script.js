const container = document.getElementById('container');
let books = [];
function Book(name, author, read, year){
    this.name = name;
    this.author = author,
    this.read = read,
    this.year = year
}

let elTunel = new Book("Ernesto Sabato", true, 1994);
console.log(elTunel);

const addBook = (addBookForm) => {
    //const addBookForm = document.getElementById('add-book');
    console.log(addBookForm);
    addBookForm.preventDefault();
    const name = addBookForm.get('name');
    const author = addBookForm.get('author');
    const year = addBookFor.get('year');
    const read = addBookForm.get('read');
    let book = new Book(author, year, read);
    console.log(book);
    //container.appChild(div)
    
}