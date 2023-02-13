let myLibrary = [];

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    };
}

theHobbit = new book("The Hobbit", "J.R.R. Tolkien", "295", "read");
briefHistory = new book(
    "A Brief History of Time",
    "Stephen Hawking",
    "256",
    "read"
);
atomicHabits = new book("Atomic Habits", "James Clear", "320", "not read yet");

function addBookToLibrary(book) {
    myLibrary.push(book);
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

const library = document.getElementById("library");

addBookToLibrary(theHobbit);
addBookToLibrary(briefHistory);
addBookToLibrary(atomicHabits);
displayBooks(library);
