let myLibrary = [];
const keys = ["title", "author", "pages", "read"];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    info() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}

function addBookToLibrary() {
    // Adds a book to the library array based on values in new book form fields
    const title = document.getElementById("newBook-title").value;
    const author = document.getElementById("newBook-author").value;
    const pages = document.getElementById("newBook-pages").value;
    const read = document.getElementById("newBook-read").value;
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    // Show new book button and hide form
    document.getElementById("newBook-button").style.display = "block";
    document.getElementById("newBook-form-container").style.display = "none";
    console.log(`${title} added to library`);
}

function displayBooks() {
    library.textContent = ""; // Clear div
    for (let i = 0; i < myLibrary.length; i++) {
        let card = document.createElement("div");
        card.classList.add("card");
        for (let j = 0; j < keys.length - 1; j++) {
            let prop = keys[j];
            let cardProp = document.createElement("div");
            cardProp.classList.add(prop);
            cardProp.innerText = myLibrary[i][prop];
            card.appendChild(cardProp); // Add card property div to card
        }

        let readButton = document.createElement("button");
        readButton.innerText = myLibrary[i].read;
        readButton.setAttribute("class", "read-btn");

        if (readButton.innerText == "read") {
            readButton.classList.add("read");
        } else {
            readButton.classList.add("notRead");
        }

        readButton.addEventListener("click", (event) => {
            readToggle(readButton);
            myLibrary[i].read = readButton.innerText;
        });
        card.appendChild(readButton);

        let removeButton = document.createElement("button");
        removeButton.innerText = "remove";
        removeButton.setAttribute("class", "remove-btn");
        removeButton.addEventListener("click", (event) => {
            console.log(`${myLibrary[i].title} removed from library`);
            myLibrary.splice(i, 1);
            displayBooks();
        });
        card.appendChild(removeButton);

        library.appendChild(card); // Add card div to library
    }
}

function readToggle(readButton) {
    if (readButton.innerText == "read") {
        readButton.innerText = "not read yet";
        readButton.classList.remove("read");
        readButton.classList.add("notRead");
    } else {
        readButton.innerText = "read";
        readButton.classList.remove("notRead");
        readButton.classList.add("read");
    }
}

function openBookForm() {
    document.getElementById("newBook-button").style.display = "none";
    document.getElementById("newBook-form-container").style.display = "block";
    console.log("Book form opened");
}

const library = document.getElementById("library");
const addBookButton = document.querySelector(".addBook-button");
const newBookForm = document.querySelector(".newBook-form");
const removeButtonAll = document.querySelectorAll(".delete-btn");

addBookButton.addEventListener("click", (event) => {
    // Check a book title has been entered
    if (document.getElementById("newBook-title").value !== "") {
        addBookToLibrary();
        displayBooks(); // Redisplay library div
        newBookForm.reset(); // Reset form entries
    } else {
        alert("Please enter a title for the book you wish to add.");
    }
    event.preventDefault(); // Prevents form from being submitted normally
});

// Add initial sample books
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "read");
const briefHistory = new Book(
    "A Brief History of Time",
    "Stephen Hawking",
    "256",
    "read"
);
const atomicHabits = new Book(
    "Atomic Habits",
    "James Clear",
    "320",
    "not read yet"
);

myLibrary.push(theHobbit);
myLibrary.push(briefHistory);
myLibrary.push(atomicHabits);

displayBooks();
