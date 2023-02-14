let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    };
}

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

function addBookToLibrary() {
    const title = document.getElementById("newBook-title").value;
    const author = document.getElementById("newBook-author").value;
    const pages = document.getElementById("newBook-pages").value;
    const read = document.getElementById("newBook-read").value;
    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    document.getElementById("newBook-button").style.display = "block";
}

function displayBooks(div) {
    keys = ["title", "author", "pages", "read"];
    for (let i = 0; i < myLibrary.length; i++) {
        let card = document.createElement("div");
        card.classList.add("card");
        for (let j = 0; j < keys.length; j++) {
            let prop = keys[j];
            let cardProp = document.createElement("div");
            cardProp.classList.add(prop);
            let cardPropText = document.createTextNode(myLibrary[i][prop]);
            cardProp.appendChild(cardPropText);
            card.appendChild(cardProp);
        }
        div.appendChild(card);
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

addBookButton.addEventListener("click", (event) => {
    addBookToLibrary();
    library.textContent = "";
    displayBooks(library);
    newBookForm.reset();
    document.getElementById("newBook-form-container").style.display = "none";
    event.preventDefault();
});

displayBooks(library);
