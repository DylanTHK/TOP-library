// [["White Fang", "Author", 120, true], 
// ["Moby Dick", "Author", 310, true], 
// ["Peter Pan", "Author", 140, false]];

let myLibrary = [];

const newBookButton = document.querySelector("#new-book-button");
const newBookForm = document.querySelector("#new-book-form");
const addBookButton = document.querySelector(".add-book");
const library = document.querySelector("#book-container");

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

// constructor to create object Books
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

// To add book objects to myLibrary
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
    
        // reset fields
        title.value = "";
        author.value = "";
        pages.value = "";
        isRead.checked = false;
        newBookForm.style.display = "none";
    } 
}

// function to loop through myLibrary and display cards


// function to remove card from array

// function to toggle read status in card
