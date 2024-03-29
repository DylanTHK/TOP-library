// class for creating books
class Book {
    // constructor to hold the properties of each Class instance
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}

// MODULE 2: Manage Book Cards
class MyLibrary {
    constructor() {
        this.allBooks = [{
            title: "White Fang",
            author: "Mr.A",
            pages: 200,
            read: true
        }, {
            title: "Moby Dick",
            author: "Mr.B",
            pages: 300,
            read: false
        }, {
            title: "Peter Pan",
            author: "Mr.C",
            pages: 400,
            read: false
        }];
        this.bookContainer = document.querySelector("#book-container");
    } 
    // methods for myLibrary
    getBooks = () => {
        return this.allBooks;
    }
    // creating a card for 1 book (book details from array allBooks)
    createBookCard = (book) => {
        // creating HTML elements
        let bookCell = document.createElement("div");
        let title = document.createElement("div");
        let author = document.createElement("div");
        let pages = document.createElement("div");
        let read = document.createElement("button");
        let removeBook = document.createElement("button");
        // adding classes to HTML elements
        bookCell.classList.add("book-cell");
        title.classList.add("title");
        author.classList.add("author");
        pages.classList.add("pages");
        removeBook.classList.add("remove-book")
        if (book.read) {
            read.classList.add("read");
            read.textContent = "Read"; 
        } else {
            read.classList.add("not-read");
            read.textContent = "Not Read";
        };
        // adding text to HTML elements
        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        removeBook.textContent = "Remove ";
        // create remove-book button w icon (<i class="fa-solid fa-xmark"></i>) 
        let icon = document.createElement("i");
        icon.classList.add("fa-solid", "fa-xmark");
        removeBook.appendChild(icon);
        // adding content for card
        bookCell.append(title, author, pages, read, removeBook);
        // add card to library
        this.bookContainer.appendChild(bookCell);
        read.addEventListener("click", (e) => {
            this.toggleReadStatus(e.target);
        })
        removeBook.addEventListener("click", (e) => {
            console.log(e.path[1].remove());
        })
    }
    // function to go through allBooks and call createBookCard function
    displayBooks = () => {
        this.bookContainer.textContent = "";
        this.allBooks.map(book => {
            this.createBookCard(book);
        });
    }
    // add book to allBooks Array with content from FORM
    addBookToLibrary = () => {
        // generating elements for each input field in form
        let newBookForm = document.getElementById("new-book-form");
        let title = document.querySelector("#book-title").value;
        let author = document.querySelector("#book-author").value;
        let pages = document.querySelector("#book-pages").value;
        let isRead = document.querySelector("#book-read-status").checked;
        if(title !== "" && author !== "" && pages !== "") {
            // create new Book object
            let newBook = new Book(title, author, pages, isRead);
            // add new object to myLibrary
            this.allBooks.push(newBook);
            this.displayBooks()
            // reset fields
            this.resetForm(newBookForm);
            newBookForm.style.display = "none";
        } 
    }
    resetForm = (form) => {
        form.reset()
    }
    // method to toggle read status in card
    toggleReadStatus = (button) => {
        let text = button.textContent;
        // if text is read, change to Not Read & change class to not-read
        if(text == "Read") {
            button.textContent = "Not Read";
            button.classList.remove("read");
            button.classList.add("not-read");
        } else {
            button.textContent = "Read";
            button.classList.remove("not-read");
            button.classList.add("read");
        }
    }
}

const Library = new MyLibrary();

// MODULE: Manage Book Form (User Interface)
const bookController = (() => {
    Library.displayBooks();
    // variables assigned for buttons
    const newBookButton = document.querySelector("#new-book-button");
    const newBookForm = document.querySelector("#new-book-form");
    const addBookButton = document.querySelector(".add-book");
    const closeForm = document.querySelector("#close-form");
    // for "+ New Book" button
    newBookButton.addEventListener("click", () => {
        newBookForm.style.display = "grid";
    })
    // **********TO MANAGE BUG WHEN CLOSING EMPTY FORM (empty field is not focusable) **********
    closeForm.addEventListener("click", () => {
        newBookForm.style.display = "";
        newBookForm.reset();
    })
    addBookButton.addEventListener("click", () => {
        Library.addBookToLibrary();
    })
    console.log("bookController ready");
})();

