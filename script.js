const myLibrary = [{
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

const newBookButton = document.querySelector("#new-book-button");
const newBookForm = document.querySelector("#new-book-form");
const addBookButton = document.querySelector(".add-book");
const library = document.querySelector("#book-container");
// const readStatusButton = document.getElementsByClassName("read-status");


// brings up pop up form when +new book pressed
newBookButton.addEventListener("click", () => {
    newBookForm.style.display = "grid";
});

// removes the pop up form after pressing add book
addBookButton.addEventListener("click", (e) => {
    // call function to take inputs and store in function
    e.preventDefault();
    addBookToLibrary();
});

// adding toggle function to read / not read button
document.body.addEventListener("click", (e) => {
    if(e.target.classList.contains("read") | e.target.classList.contains("not-read")){
        toggleReadStatus(e.target);
    }
});

// constructor to create object Books
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

// To add book objects to myLibrary array with form input
function addBookToLibrary() {
    // generating elements for each input field in form
    let title = document.querySelector("#book-title").value;
    let author = document.querySelector("#book-author").value;
    let pages = document.querySelector("#book-pages").value;
    let isRead = document.querySelector("#book-read-status").checked;

    if(title != "" & author != "" & pages != "") {
        // create new Book object
        let newBook = new Book(title, author, pages, isRead);
    
        // add new object to myLibrary
        myLibrary.push(newBook);
        displayBooks()
    
        // reset fields
        title.value = "";
        author.value = "";
        pages.value = "";
        isRead.checked = false;
        newBookForm.style.display = "none";
    } 
}

// function to create single book card
function createBookCard(book) {
    // create book-cell element,
    let bookCell = document.createElement("div");
    bookCell.classList.add("book-cell");
    // create title element
    let title = document.createElement("div");
    title.classList.add("title");
    title.textContent = book.title;
    // create author element
    let author = document.createElement("div");
    author.classList.add("author");
    author.textContent = book.author;
    // create pages element
    let pages = document.createElement("div");
    pages.classList.add("pages");
    pages.textContent = book.pages;
    // create read button
    let read = document.createElement("button");
    if (book.read) {
        read.classList.add("read");
        read.textContent = "Read"; // EDIT WITH CONDITION Read/Not Read
    } else {
        read.classList.add("not-read");
        read.textContent = "Not Read";
    };
    // create remove-book button (with <i class="fa-solid fa-xmark"></i> icon) 
    let removeBook = document.createElement("button");
    removeBook.classList.add("remove-book")
    removeBook.textContent = "Remove ";

    bookCell.append(title, author, pages, read, removeBook);

    library.appendChild(bookCell);
}

// function to go through myLibrary and call createBookCard function
function displayBooks() {
    library.textContent = "";
    myLibrary.map(book => {
        createBookCard(book);
    });
};
// function to toggle read status in card
function toggleReadStatus(button) {
    let text = button.textContent;
    // if text is read, change to Not Read & change class to not-read
    if(text == "Read") {
        button.textContent = "Not Read";
        button.classList.remove("read");
        button.classList.add("not-read");
    }else {
        button.textContent = "Read";
        button.classList.remove("not-read");
        button.classList.add("read");
    }
    // if text is Not Read
}


// function to remove card from array




displayBooks(myLibrary);




