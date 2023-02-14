let myLibrary = [];
const keys = ["title", "author", "pages", "read"];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    };
}

function addBookToLibrary() {
    // Adds a book to the library array based on values in new book form fields
    const title = document.getElementById("newBook-title").value;
    const author = document.getElementById("newBook-author").value;
    const pages = document.getElementById("newBook-pages").value;
    const read = document.getElementById("newBook-read").value;
    newBook = new Book(title, author, pages, read);
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
        for (let j = 0; j < keys.length; j++) {
            let prop = keys[j];
            let cardProp = document.createElement("div");
            cardProp.classList.add(prop);
            cardProp.innerText = myLibrary[i][prop];
            card.appendChild(cardProp); // Add card property div to card
        }

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
theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "read");
briefHistory = new Book(
    "A Brief History of Time",
    "Stephen Hawking",
    "256",
    "read"
);
atomicHabits = new Book("Atomic Habits", "James Clear", "320", "not read yet");

myLibrary.push(theHobbit);
myLibrary.push(briefHistory);
myLibrary.push(atomicHabits);

displayBooks();
