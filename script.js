let myLibrary = [];

function Book(title = "", author = "", npages = "", wasRead = false, picURL = "img/menu_book_black_48dp.svg") {
    this.id = Date.now() + ((Math.random() * 100000).toFixed()) + "";
    this.title = title;
    this.author = author;
    this.npages = npages;
    this.wasRead = wasRead;
    this.picURL = picURL;
    this.selected = false;
}

Book.prototype.read = function () {
    this.wasRead = !this.wasRead;
}

function getHTMLBookInfoImg(book) {

    const imgBook = document.createElement("img");
    imgBook.setAttribute("src", book.picURL);
    imgBook.setAttribute("alt", "book's portrait");
    imgBook.setAttribute("class", "img-book w-28");

    return imgBook;
}

function getHTMLBookInfoText(book) {
    const divBookText = document.createElement("div");
    divBookText.classList.add("div-book-info-text");

    const pTitle = document.createElement("p");
    pTitle.textContent = book.title;
    pTitle.setAttribute("class", "p-title text-xl font-bold");
    divBookText.appendChild(pTitle);

    const pAuthor = document.createElement("p");
    pAuthor.textContent = book.author;
    pAuthor.setAttribute("class", "p-author text-lg font-normal");
    divBookText.appendChild(pAuthor);

    const pPages = document.createElement("p");
    pPages.textContent = book.npages + " pages";
    pPages.setAttribute("class", "p-pages");
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
    inputToggle.setAttribute("class", "input-toggle peer sr-only");
    inputToggle.checked = book.wasRead;
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

    const book1 = new Book("The Hobbit", "J.R.R. Tolkien", "295", false, "img/menu_book_black_48dp.svg");
    const book6 = new Book("Super Bad", "J.R.R. Tolkien", "295", false, "img/menu_book_black_48dp.svg");
    const book2 = new Book("The Hobbit", "J.R.R. Tolkien", "295", false, "img/menu_book_black_48dp.svg");
    const book3 = new Book("Tia Julia", "J.R.R. Tolkien", "295", false, "img/menu_book_black_48dp.svg");
    const book4 = new Book("The Hobbit", "J.R.R. Tolkien", "295", true, "img/menu_book_black_48dp.svg");
    const book5 = new Book("The Hobbit", "J.R.R. Tolkien", "295", false, "img/menu_book_black_48dp.svg");
    const book7 = new Book("Homo Sapiens", "J.R.R. Tolkien", "295", false, "img/menu_book_black_48dp.svg");
    const book8 = new Book("The Hobbit", "J.R.R. Tolkien", "295", false, "img/menu_book_black_48dp.svg");
    const book9 = new Book("Super Human", "J.R.R. Tolkien", "295", false, "img/menu_book_black_48dp.svg");
    const book10 = new Book("The Hobbit", "J.R.R. Tolkien", "4218", true, "img/menu_book_black_48dp.svg");

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

function toggleBookSelection(book) {

    const card = document.getElementById("book-" + book.id);
    card.classList.toggle("selected-card");

    // if (card.classList.contains("selected-card")) {
    //     card.classList.remove("selected-card");
    // } else card.classList.add("selected-card");

    book.selected = !book.selected;
}

function assignCardEvents() {
    const editButtons = document.querySelectorAll(".edit-book-button");

    for (const editButton of editButtons) {
        editButton.addEventListener("click", function () {

            clearModalControls();
            const hiddenBookID = document.getElementById("hid-book-id");

            hiddenBookID.value = editButton.id.split("-")[1];
            const book = myLibrary.find(bookElement => bookElement.id == hiddenBookID.value);
            assignBook2PopUp(book);

            const modalPopUp = document.getElementById("favDialog");
            modalPopUp.style.display = "block";
        });
    }

    const selections = document.querySelectorAll(".selection");

    for (const checkbox of selections) {

        checkbox.addEventListener("change", function () {
            const bookID = this.id.split("-")[1];
            const book = myLibrary.find(bookElement => bookElement.id == bookID);
            toggleBookSelection(book)
        });
    }

    const toggles = document.querySelectorAll(".input-toggle");
    for (const toggle of toggles) {

        toggle.addEventListener("change", function () {
            const bookID = this.id.split("-")[1];
            const book = myLibrary.find(bookElement => bookElement.id == bookID);
            book.wasRead = this.checked;
        });
    }
}

function clearModalControls() {

    const inputTitle = document.getElementById("titlem");
    const inputAuthor = document.getElementById("authorm");
    const inputPages = document.getElementById("npagesm");
    const checboxRead = document.getElementById("toogleModal");
    const hiddenBookID = document.getElementById("hid-book-id");

    inputTitle.value = "";
    inputAuthor.value = "";
    inputPages.value = "";
    hiddenBookID.value = "-1";
    checboxRead.checked = false;


}

function assignPopUp2Book(book) {

    const inputTitle = document.getElementById("titlem");
    const inputAuthor = document.getElementById("authorm");
    const inputPages = document.getElementById("npagesm");
    const checboxRead = document.getElementById("toogleModal");

    book.title = inputTitle.value;
    book.author = inputAuthor.value;
    book.npages = inputPages.value;
    book.wasRead = checboxRead.checked;
}

function assignBook2PopUp(book) {
    const inputTitle = document.getElementById("titlem");
    const inputAuthor = document.getElementById("authorm");
    const inputPages = document.getElementById("npagesm");
    const checboxRead = document.getElementById("toogleModal");

    inputTitle.value = book.title;
    inputAuthor.value = book.author;
    inputPages.value = book.npages;
    checboxRead.checked = book.wasRead;
}

function refreshBookOnList(book) {
    //const divBook = document.getElementById("book-" + book.id);

    const selectorTitle = "#book-" + book.id + " " + ".p-title";

    const pTitle = document.querySelector(selectorTitle);

    const pAuthor = document.querySelector("#book-" + book.id + " " + ".p-author");
    const pPages = document.querySelector("#book-" + book.id + " " + ".p-pages");
    const imgBook = document.querySelector("#book-" + book.id + " " + ".img-book");
    const inputToggle = document.querySelector("#book-" + book.id + " " + ".input-toggle");
    const inputCheckBox = document.querySelector("#book-" + book.id + " " + ".selection");


    pTitle.textContent = book.title;
    pAuthor.textContent = book.author;
    pPages.textContent = book.npages;
    imgBook.setAttribute("src", book.picURL);
    inputToggle.checked = book.wasRead;

    book.selected = false;
    inputCheckBox.checked = book.selected;

    const card = document.getElementById("book-" + book.id);
    if (card.classList.contains("selected-card")) {
        card.classList.remove("selected-card");
    }
}

function searchBooks(textSearchTerm) {
    const arrSearchResult = myLibrary.filter(book => {

        if ((book.title.toUpperCase().includes(textSearchTerm.toUpperCase())) || (book.author.toUpperCase().includes(textSearchTerm.toUpperCase()))) {
            return true;
        } else return false;
    });
    refreshBookList(arrSearchResult);
}

function assignDashboardEvents() {
    const btnDelete = document.getElementById("btnDelete");
    btnDelete.addEventListener("click", function () {

        const nonSelectedBooks = myLibrary.filter(book => (book.selected === false));

        const qttSelected = myLibrary.length - nonSelectedBooks.length;
        if (qttSelected > 0) {

            if (window.confirm("Are you sure you want to remove " + qttSelected + " books?")) {

                myLibrary = nonSelectedBooks;

                const btnSearch = document.getElementById("search-book");
                if (btnSearch.value.length > 0) {

                    searchBooks(btnSearch.value);
                } else refreshBookList(myLibrary);

                window.alert(qttSelected + " books were removed successfully.");
            }
        } else {

            window.alert("There are no books selected to remove.");
        }
    });

    const btnCreate = document.getElementById("btnCreate");
    btnCreate.addEventListener("click", function () {

        clearModalControls();
        const modalPopUp = document.getElementById("favDialog");
        modalPopUp.style.display = "block";
    });

    const btnSearch = document.getElementById("search-book");
    btnSearch.addEventListener("keydown", function (e) {

        if (e.key === "Enter") {

            const textSearchTerm = this.value;
            searchBooks(textSearchTerm);
        }
    });
}

function clearSearchControls() {
    const btnSearch = document.getElementById("search-book");
    if (btnSearch.value.length > 0) {
        btnSearch.value = "";
    }
}

function assignModalEvents() {


    const saveButton = document.getElementById("btnSaveModal");
    saveButton.addEventListener("click", function () {

        const formDialog = document.getElementById("formDialog");

        if (formDialog.checkValidity()) {

            const modalPopUp = document.getElementById("favDialog");
            modalPopUp.style.display = "none";

            const hiddenBookID = document.getElementById("hid-book-id");
            let book;
            if (hiddenBookID.value === "-1") {

                book = new Book();
                assignPopUp2Book(book);
                myLibrary.push(book);

                clearSearchControls()
                refreshBookList(myLibrary);

            } else {

                book = myLibrary.find(bookElement => bookElement.id == hiddenBookID.value);
                assignPopUp2Book(book);
                refreshBookOnList(book);
            }
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

function refreshBookList(arrBookList) {

    const divBookList = document.querySelector(".book-list");
    divBookList.replaceChildren();
    for (const book of arrBookList) {

        const bookCard = getHTMLCard(book);
        divBookList.appendChild(bookCard);
    }

    assignCardEvents();
}

function loadBooks() {

    createBooks();
    refreshBookList(myLibrary);
}

loadBooks();
assignDashboardEvents();
assignModalEvents();



