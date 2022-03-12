import { Book2 } from "./book.js";

export class BookList {
    #arrBookList = [];
    #divBookList = document.querySelector(".book-list");

    constructor() {

        const book0 = new Book2("Don Quixote", "Miguel de Cervantes", "534", false, "img/books/lkhkljtqjtblzu5z3tusdbntj15a.jpeg");
        const book1 = new Book2("Anna Karenina", "Leo Tolstoy", "295", false, "img/books/jmhm8mrn2xjclr6v07rj00s6xl5g.jpeg");
        const book6 = new Book2("Pride and Prejudice", "Jane Austen", "302", true, "img/books/c50w37qeeosyydde5m5uv4fk75ro.jpeg");
        const book2 = new Book2("Crime and Punishment", "Fyodor Dostoyevsky", "411", false, "img/books/sliuygtth8qftz1mt6pzrsom284g.jpeg");
        const book3 = new Book2("The Divine Comedy", "Dante Alighieri", "288", false, "img/books/x9oilp1o53aty07nyh57oyogot20.jpeg");
        const book4 = new Book2("Madame Bovary", "Gustave Flaubert", "351", true, "img/books/gckzc30wo2b24guei1wfqr7hp84q.jpeg");
        const book5 = new Book2("The Odyssey", "Homer", "445", false, "img/books/ihwv965787rm0zvkj6hg3f2taasw.jpeg");
        const book7 = new Book2("Hamlet", "William Shakespeare", "295", false, "img/books/l7nwhydouo4phabualw7s5cin7gb.jpeg");
        const book8 = new Book2("Moby Dick", "Herman Melville", "323", false, "img/books/jzeie89rkkv1s2q7dwwgiysixnty.jpeg");
        const book9 = new Book2("The Great Gatsby", "F. Scott Fitzgerald", "203", false, "img/books/r85zaw5fj98tgc0y5rutjbkmowfy.jpeg");
        const book10 = new Book2("100 Years of Solitude", "Gabriel Garcia Marquez", "405", true, "img/books/kxk6iwn543doz8jqbs2sckh2fcot.jpeg");

        this.#arrBookList.push(book0);
        this.#arrBookList.push(book1);
        this.#arrBookList.push(book2);
        this.#arrBookList.push(book3);
        this.#arrBookList.push(book4);
        this.#arrBookList.push(book5);
        this.#arrBookList.push(book6);
        this.#arrBookList.push(book7);
        this.#arrBookList.push(book8);
        this.#arrBookList.push(book9);
        this.#arrBookList.push(book10);


    }

    #countBooksToDelete(selected) {
        const spanCount = document.getElementById("deleteCount");
        let currentCount = Number(spanCount.textContent.substring(1, spanCount.textContent.length - 1));

        console.log("currentCount= " + currentCount);
        currentCount += (selected) ? 1 : -1;
        spanCount.textContent = "(" + currentCount + ")";
    }

    #toggleBookSelection(book) {

        const card = document.getElementById("book-" + book.id);
        card.classList.toggle("selected-card");

        // if (card.classList.contains("selected-card")) {
        //     card.classList.remove("selected-card");
        // } else card.classList.add("selected-card");

        book.selected = !book.selected;
    }

    #assignBook2PopUp(book) {
        const inputTitle = document.getElementById("titlem");
        const inputAuthor = document.getElementById("authorm");
        const inputPages = document.getElementById("npagesm");
        const checboxRead = document.getElementById("toogleModal");

        inputTitle.value = book.title;
        inputAuthor.value = book.author;
        inputPages.value = book.npages;
        checboxRead.checked = book.wasRead;
    }

    #clearModalControls() {

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

    #editButtonEvent(editButton) {
        this.#clearModalControls();
        const hiddenBookID = document.getElementById("hid-book-id");

        hiddenBookID.value = editButton.id.split("-")[1];
        const book = this.#arrBookList.find(bookElement => bookElement.id == hiddenBookID.value);
        this.#assignBook2PopUp(book);

        const modalPopUp = document.getElementById("favDialog");
        modalPopUp.style.display = "block";

        const pPopUpTitle = document.getElementById("popup-title");
        pPopUpTitle.textContent = "Edit Book";
    }

    #checkBoxChangeEvent(checkbox) {
        const bookID = checkbox.id.split("-")[1];
        const book = this.#arrBookList.find(bookElement => bookElement.id == bookID);

        this.#toggleBookSelection(book)

        this.#countBooksToDelete(checkbox.checked);
    }

    #toggelChange(toggle) {
        const bookID = toggle.id.split("-")[1];
        const book = myLibrary.find(bookElement => bookElement.id == bookID);
        book.wasRead = toggle.checked;
    }

    #assignCardEvents() {
        const editButtons = document.querySelectorAll(".edit-book-button");

        for (const editButton of editButtons) {
            editButton.addEventListener("click", this.#editButtonEvent.bind(this, editButton));
        }

        const selections = document.querySelectorAll(".selection");

        for (const checkbox of selections) {

            checkbox.addEventListener("change", this.#checkBoxChangeEvent.bind(this, checkbox));
        }

        const toggles = document.querySelectorAll(".input-toggle");
        for (const toggle of toggles) {

            toggle.addEventListener("change", this.#toggelChange.bind(this, toggle));
        }


    }

    refreshBookList() {

        this.#divBookList.replaceChildren();
        for (const book of this.#arrBookList) {
            //const bookCard = getHTMLCard(book);
            this.#divBookList.appendChild(book.getHTMLCard());
        }

        const qttBooks = document.getElementById("cant-books");
        qttBooks.textContent = this.#arrBookList.length + (this.#arrBookList.length === 1 ? " book was found" : " books were found");

        this.#assignCardEvents();
    }

    get getBookList() {
        return this.#arrBookList;
    }

    set setBookList(newList) {
        this.#arrBookList = newList;
    }

    addBook(book) {
        this.#arrBookList.push(book);
    }

    searchBooks(textSearchTerm) {
        const arrSearchResult = myLibrary.filter(book => {

            if ((book.title.toUpperCase().includes(textSearchTerm.toUpperCase())) || (book.author.toUpperCase().includes(textSearchTerm.toUpperCase()))) {
                return true;
            } else return false;
        });
        this.refreshBookList();
    }
}