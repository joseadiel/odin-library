const myLibrary = [];

class Book {
    constructor(image, title, author, year) {
        this.image = image;
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

function addBookToLibrary(image, title, author, year) {
    const book = new Book(image, title, author, year);
    myLibrary.push(book);
    return book;
}

addBookToLibrary('images/el-principito.jpeg', 'El principito', 'Antoine de Saint-Exupéry', 1943);
addBookToLibrary('images/don-quijote-de-la-mancha.webp', 'Don Quijote de la Mancha', 'Miguel de Cervantes', 1605);
addBookToLibrary('images/cien-años-de-soledad.jpg', 'Cien años de soledad', 'Gabriel García Márquez', 1967);
addBookToLibrary('images/1984.jpg', '1984', 'George Orwell', 1949);
addBookToLibrary('images/pedro-páramo.jpg', 'Pedro Páramo', 'Juan Rulfo', 1955);

function displayBooks() {
    const library = document.getElementById('library');
    library.innerHTML = '';
    myLibrary.forEach((book) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const fontPage = document.createElement('div');
        fontPage.classList.add('font-page');

        const img = document.createElement('img');
        img.src = book.image;

        const info = document.createElement('div');
        info.classList.add('info');

        info.innerHTML = `
            <p>ID: ${book.id}</p>
            <p>Title: ${book.title}</p>
            <p>Author: ${book.author}</p>
            <p>Year: ${book.year}</p>  
        `;

        library.appendChild(card);
        card.appendChild(fontPage);
        fontPage.appendChild(img);
        card.appendChild(info);
    });
}

displayBooks();