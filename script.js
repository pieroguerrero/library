const myLibrary = [];

function Book(title, author, npages, wasRead, picURL) {
    this.id = Date.now() + ((Math.random() * 100000).toFixed());
    this.title = title;
    this.author = author;
    this.npages = npages;
    this.wasRead = wasRead;
    this.picURL = picURL;
    this.selected = 0;
}

Book.prototype.read = function () {
    this.wasRead = !this.wasRead;
}

function createBooks() {
    const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false, "img/mode_edit_black_24dp.svg");
    const book6 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false, "img/mode_edit_black_24dp.svg");
    const book2 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false, "img/mode_edit_black_24dp.svg");
    const book3 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false, "img/mode_edit_black_24dp.svg");
    const book4 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false, "img/mode_edit_black_24dp.svg");
    const book5 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false, "img/mode_edit_black_24dp.svg");
    const book7 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false, "img/mode_edit_black_24dp.svg");
    const book8 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false, "img/mode_edit_black_24dp.svg");
    const book9 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false, "img/mode_edit_black_24dp.svg");
    const book10 = new Book("The Hobbit", "J.R.R. Tolkien", 2300, false, "img/mode_edit_black_24dp.svg");

    myLibrary.push(book1);
    myLibrary.push(book2);
    myLibrary.push(book3);
    myLibrary.push(book4);
    myLibrary.push(book5);
    myLibrary.push(book6);
    myLibrary.push(book7);
    myLibrary.push(book8);
    myLibrary.push(book9);
    myLibrary.push(book10);
}



function assignSelection() {
    const selections = document.querySelectorAll(".selection");

    for (const checkbox of selections) {

        checkbox.addEventListener('change', function () {
            const n = this.id.split("-")[1];
            const card = document.getElementById("book-" + n);
            card.classList.toggle("selected-card");
        });
    }
}

assignSelection();