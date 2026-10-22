const myLibrary = [];

class Book {
    constructor(title, author, year) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

function addBookToLibrary(title, author, year) {
    const book = new Book(title, author, year);
    myLibrary.push(book);
    return book;
}

addBookToLibrary('El principito', 'Antoine de Saint-Exupéry', 1943);
addBookToLibrary('Don Quijote de la Mancha', 'Miguel de Cervantes', 1605);
addBookToLibrary('Cien años de soledad', 'Gabriel García Márquez', 1967);
addBookToLibrary('1984', 'George Orwell', 1949);
addBookToLibrary('Pedro Páramo', 'Juan Rulfo', 1955);