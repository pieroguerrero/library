import { BookList } from "./bookList.js";
import { Book2 } from "./book.js";

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

function clearSearchControls() {
    const btnSearch = document.getElementById("search-book");
    if (btnSearch.value.length > 0) {
        btnSearch.value = "";
    }
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

                book = new Book2();
                assignPopUp2Book(book);
                bookLibrary.addBook(book);

                clearSearchControls()
                bookLibrary.refreshBookList();

            } else {

                book = bookLibrary.getBookList.find(bookElement => bookElement.id == hiddenBookID.value);
                assignPopUp2Book(book);
                refreshBookOnList(book);
            }
            console.log("cerrando modal");
        } else {
            console.log("no es valido");
        }

    });

    const btnCancel = document.getElementById("btnCancelModal");
    btnCancel.addEventListener("click", function () {
        const modalPopUp = document.getElementById("favDialog");
        modalPopUp.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        const modalPopUp = document.getElementById("favDialog");
        if (e.target == modalPopUp) {
            modalPopUp.style.display = "none";
        }
    });
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

function assignDashboardEvents() {
    const btnDelete = document.getElementById("btnDelete");
    btnDelete.addEventListener("click", function () {

        const nonSelectedBooks = bookLibrary.getBookList.filter(book => (book.selected === false));

        const qttSelected = bookLibrary.getBookList.length - nonSelectedBooks.length;
        if (qttSelected > 0) {

            if (window.confirm("Are you sure you want to delete " + qttSelected + " books?")) {

                bookLibrary.setBookList = nonSelectedBooks;

                const btnSearch = document.getElementById("search-book");
                if (btnSearch.value.length > 0) {

                    searchBooks(btnSearch.value);
                } else bookLibrary.refreshBookList();

                window.alert(qttSelected + " books were deleted successfully.");
            }
        } else {

            window.alert("There are no books selected to delete.");
        }
    });

    const btnCreate = document.getElementById("btnCreate");
    btnCreate.addEventListener("click", function () {

        clearModalControls();
        const modalPopUp = document.getElementById("favDialog");
        modalPopUp.style.display = "block";

        const pPopUpTitle = document.getElementById("popup-title");
        pPopUpTitle.textContent = "Create New Book"

    });

    const btnSearch = document.getElementById("search-book");
    btnSearch.addEventListener("keydown", function (e) {

        if (e.key === "Enter") {

            const textSearchTerm = this.value;
            bookLibrary.searchBooks(textSearchTerm);
        }
    });
}

const bookLibrary = new BookList();
bookLibrary.refreshBookList();

//loadBooks();
assignDashboardEvents();
assignModalEvents();