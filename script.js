const myLibrary = [];

function Book(title, author, npages, wasRead, picURL) {
    this.id = Date.now() + ((Math.random() * 100000).toFixed()) + "";
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

function getHTMLBookInfoImg(book) {

    const imgBook = document.createElement("img");
    imgBook.setAttribute("src", book.picURL);
    imgBook.setAttribute("alt", "book's portrait");
    imgBook.classList.add("w-28");

    return imgBook;
}

function getHTMLBookInfoText(book) {
    const divBookText = document.createElement("div");
    divBookText.classList.add("div-book-info-text");

    const pTitle = document.createElement("p");
    pTitle.textContent = book.title;
    pTitle.setAttribute("class", "text-xl font-bold");
    divBookText.appendChild(pTitle);

    const pAuthor = document.createElement("p");
    pAuthor.textContent = book.author;
    pAuthor.setAttribute("class", "text-lg font-normal");
    divBookText.appendChild(pAuthor);

    const pPages = document.createElement("p");
    pPages.textContent = book.npages + " pages";
    divBookText.appendChild(pPages);

    return divBookText;
}

function getHTMLBookControlsCheckBox(book) {
    const divCheckBox = document.createElement("div");
    divCheckBox.classList.add("div-book-controls-checkbox");

    const inputCheckBox = document.createElement("input");
    inputCheckBox.id = "select-" + book.id;
    inputCheckBox.setAttribute("type", "checkbox");
    inputCheckBox.setAttribute("name", "select");
    inputCheckBox.setAttribute("class", "selection div-book-controls-checkbox-input");
    divCheckBox.appendChild(inputCheckBox);

    const labelCheckBox = document.createElement("label");
    labelCheckBox.id = "label-select";
    labelCheckBox.setAttribute("for", inputCheckBox.id);
    labelCheckBox.textContent = "Select";
    divCheckBox.appendChild(labelCheckBox);

    return divCheckBox;
}

function getHTMLBookControlsToggel(book) {

    const divToggle = document.createElement("div");
    const divToggle2 = document.createElement("div");
    divToggle.appendChild(divToggle2);

    const labelToggle = document.createElement("label");
    labelToggle.setAttribute("for", "toggle-" + book.id);
    labelToggle.setAttribute("class", "div-book-controls-toggle-label");
    divToggle.appendChild(labelToggle);

    const divToggleRelative = document.createElement("div");
    divToggleRelative.classList.add("relative");
    labelToggle.appendChild(divToggleRelative);

    const inputToggle = document.createElement("input");
    inputToggle.id = "toggle-" + book.id;
    inputToggle.setAttribute("type", "checkbox");
    inputToggle.setAttribute("class", "peer sr-only");
    divToggleRelative.appendChild(inputToggle);

    const divToggleLine = document.createElement("div");
    divToggleLine.classList.add("div-book-controls-toggle-line");
    divToggleRelative.appendChild(divToggleLine);

    const divToggleDot = document.createElement("div");
    divToggleDot.setAttribute("class", "dot div-book-controls-toggle-dot peer-checked:bg-green-600 peer-checked:translate-x-full");
    divToggleRelative.appendChild(divToggleDot);

    const divRead = document.createElement("div");
    divRead.setAttribute("class", "text-gray-700 font-medium");
    labelToggle.appendChild(divRead);

    return divToggle;
}

function getHTMLCard(book) {

    //First level of contorls:
    const divBook = document.createElement("div");
    divBook.id = "book-" + book.id;
    divBook.setAttribute("class", "book div-book-card");

    //Second level of controls:
    const inputImageEdit = document.createElement("input");
    inputImageEdit.id = "edit-" + book.id;
    inputImageEdit.setAttribute("type", "image");
    inputImageEdit.setAttribute("src", "img/mode_edit_black_24dp.svg");
    inputImageEdit.setAttribute("alt", "edit icon");
    inputImageEdit.classList.add("edit-book-button");
    divBook.appendChild(inputImageEdit);

    const divBookInfo = document.createElement("div");
    divBookInfo.classList.add("div-book-info");
    divBookInfo.appendChild(getHTMLBookInfoImg(book));
    divBookInfo.appendChild(getHTMLBookInfoText(book));
    divBook.appendChild(divBookInfo);

    const divBookControls = document.createElement("div");
    divBookControls.classList.add("div-book-controls");
    divBookControls.appendChild(getHTMLBookControlsCheckBox(book));
    divBookControls.appendChild(getHTMLBookControlsToggel(book));
    divBook.appendChild(divBookControls);

    return divBook;
}

function createBooks() {

    const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false, "img/menu_book_black_48dp.svg");
    const book6 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false, "img/menu_book_black_48dp.svg");
    const book2 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false, "img/menu_book_black_48dp.svg");
    const book3 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false, "img/menu_book_black_48dp.svg");
    const book4 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false, "img/menu_book_black_48dp.svg");
    const book5 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false, "img/menu_book_black_48dp.svg");
    const book7 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false, "img/menu_book_black_48dp.svg");
    const book8 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false, "img/menu_book_black_48dp.svg");
    const book9 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false, "img/menu_book_black_48dp.svg");
    const book10 = new Book("The Hobbit", "J.R.R. Tolkien", 2300, false, "img/menu_book_black_48dp.svg");

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

function clearModalControls() {

    const inputTitle = document.getElementById("titlem");
    const inputAuthor = document.getElementById("authorm");
    const inputPages = document.getElementById("npagesm");
    const checboxRead = document.getElementById("toogleModal");
    const hiddenBookID = document.getElementById("hid-book-id");

    inputTitle.textContent = "";
    inputAuthor.textContent = "";
    inputPages.textContent = "";
    hiddenBookID.value = "-1";
    //checboxRead.checked?

}

function assignBookValues(book) {

    const inputTitle = document.getElementById("titlem");
    const inputAuthor = document.getElementById("authorm");
    const inputPages = document.getElementById("npagesm");
    const checboxRead = document.getElementById("toogleModal");

    book.title = inputTitle.textContent;
    book.author = inputAuthor.textContent;
    book.npages = inputPages.textContent;
    //falta el checkbox
}

function assignModalEvents() {
    const editButtons = document.querySelectorAll(".edit-book-button");

    for (const editButton of editButtons) {

        editButton.addEventListener("click", function () {

            clearModalControls()
            const modalPopUp = document.getElementById("favDialog");
            const hiddenBookID = document.getElementById("hid-book-id");

            hiddenBookID.value = editButton.id.split("-")[1];

            modalPopUp.style.display = "block";
        });
    }

    const saveButton = document.getElementById("btnSaveModal");

    saveButton.addEventListener("click", function () {

        const formDialog = document.getElementById("formDialog");

        if (formDialog.checkValidity()) {

            const modalPopUp = document.getElementById("favDialog");
            modalPopUp.style.display = "none";

            const hiddenBookID = document.getElementById("hid-book-id");
            const book = myLibrary.find(bookElement => bookElement.id == hiddenBookID.value);

            assignBookValues(book);

            console.log("cerrando modal");
        } else {
            console.log("no es valido");
        }

    });

    window.addEventListener("click", function (e) {
        const modalPopUp = document.getElementById("favDialog");
        if (e.target == modalPopUp) {
            modalPopUp.style.display = "none";
        }
    });
}

function loadBooks() {
    createBooks();

    const divBookList = document.querySelector(".book-list");

    for (const book of myLibrary) {

        const bookCard = getHTMLCard(book);
        divBookList.appendChild(bookCard);
    }

}

loadBooks();
assignModalEvents();
assignSelection();



