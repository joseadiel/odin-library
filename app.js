const myLibrary = [];

class Book {
    constructor(image, title, author, year, pages, language, read) {
        this.id = crypto.randomUUID();
        this.image = image;
        this.title = title;
        this.author = author;
        this.year = year;
        this.pages = pages;
        this.language = language;
        this.read = read;
    }
}

function addBookToLibrary(image, title, author, year, pages, language, read) {
    const book = new Book(image, title, author, year, pages, language, read);
    myLibrary.push(book);
    return book;
}

addBookToLibrary('images/el-principito.jpeg', 'El principito', 'Antoine de Saint-Exupéry', 1943, 140, 'Spanish', 'yes');
addBookToLibrary('images/don-quijote-de-la-mancha.webp', 'Don Quijote de la Mancha', 'Miguel de Cervantes', 1605, 1424, 'Spanish', 'no');
addBookToLibrary('images/cien-años-de-soledad.jpg', 'Cien años de soledad', 'Gabriel García Márquez', 1967, 496, 'Spanish', 'yes');
addBookToLibrary('images/1984.jpg', '1984', 'George Orwell', 1949, 396, 'Spanish', 'yes');
addBookToLibrary('images/pedro-páramo.jpg', 'Pedro Páramo', 'Juan Rulfo', 1955, 157, 'Spanish', 'yes');

function displayBooks() {
    const library = document.getElementById('library');
    library.innerHTML = '';
    myLibrary.forEach((book) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.id = book.id;

        const fontPage = document.createElement('div');
        fontPage.classList.add('font-page');

        const img = document.createElement('img');
        img.src = book.image;
        img.alt = 'Font Page';

        const info = document.createElement('div');
        info.classList.add('info');

        info.innerHTML = `
            <p>Title: ${book.title}</p>
            <p>Author: ${book.author}</p>
            <p>Year: ${book.year}</p>
            <p>Pages: ${book.pages}</p>
            <p>Language: ${book.language}</p>
            <p>Read: ${book.read}</p>
        `;

        library.appendChild(card);
        card.appendChild(fontPage);
        fontPage.appendChild(img);
        card.appendChild(info);
    });
}

displayBooks();

const bookDialog = document.getElementById('book-dialog');
const bookForm = document.getElementById('book-form');
const newBook = document.getElementById('new-book');
const cancel = document.getElementById('cancel');

newBook.addEventListener('click', () => bookDialog.showModal());
cancel.addEventListener('click', () => bookDialog.close());
bookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(bookForm);
    const book = Object.fromEntries(data);
    const imageURL = URL.createObjectURL(book.image);

    addBookToLibrary(imageURL, book.title, book.author, book.year, book.pages, book.language, book.read);
    displayBooks();

    bookForm.reset();
    bookDialog.close();
});