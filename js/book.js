export class Book2 {
    #id = Date.now() + ((Math.random() * 100000).toFixed()) + "";
    #title;
    #author;
    #npages;
    #wasRead;
    #picURL;
    #selected = false;

    constructor(title = "", author = "", npages = "", wasRead = false, picURL = "img/menu_book_black_48dp.svg") {
        this.#title = title;
        this.#author = author;
        this.#npages = npages;
        this.#wasRead = wasRead;
        this.#picURL = picURL;
    }

    #getHTMLBookInfoImg() {

        const imgBook = document.createElement("img");
        imgBook.setAttribute("src", this.#picURL);
        imgBook.setAttribute("alt", "book's portrait");
        imgBook.setAttribute("class", "img-book w-28");

        return imgBook;
    }

    #getHTMLBookInfoText() {
        const divBookText = document.createElement("div");
        divBookText.classList.add("div-book-info-text");

        const pTitle = document.createElement("p");
        pTitle.textContent = this.#title;
        pTitle.setAttribute("class", "p-title text-xl font-bold");
        divBookText.appendChild(pTitle);

        const pAuthor = document.createElement("p");
        pAuthor.textContent = this.#author;
        pAuthor.setAttribute("class", "p-author text-lg font-normal");
        divBookText.appendChild(pAuthor);

        const pPages = document.createElement("p");
        pPages.textContent = this.#npages + " pages";
        pPages.setAttribute("class", "p-pages");
        divBookText.appendChild(pPages);

        return divBookText;
    }

    #getHTMLBookControlsCheckBox() {
        const divCheckBox = document.createElement("div");
        divCheckBox.classList.add("div-book-controls-checkbox");

        const inputCheckBox = document.createElement("input");
        inputCheckBox.id = "select-" + this.#id;
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

    #getHTMLBookControlsToggel() {

        const divToggle = document.createElement("div");
        const divToggle2 = document.createElement("div");
        divToggle.appendChild(divToggle2);

        const labelToggle = document.createElement("label");
        labelToggle.setAttribute("for", "toggle-" + this.#id);
        labelToggle.setAttribute("class", "div-book-controls-toggle-label");
        divToggle.appendChild(labelToggle);

        const divToggleRelative = document.createElement("div");
        divToggleRelative.classList.add("relative");
        labelToggle.appendChild(divToggleRelative);

        const inputToggle = document.createElement("input");
        inputToggle.id = "toggle-" + this.#id;
        inputToggle.setAttribute("type", "checkbox");
        inputToggle.setAttribute("class", "input-toggle peer sr-only");
        inputToggle.checked = this.#wasRead;
        divToggleRelative.appendChild(inputToggle);

        const divToggleLine = document.createElement("div");
        divToggleLine.classList.add("div-book-controls-toggle-line");
        divToggleRelative.appendChild(divToggleLine);

        const divToggleDot = document.createElement("div");
        divToggleDot.setAttribute("class", "dot div-book-controls-toggle-dot peer-checked:bg-green-600 peer-checked:translate-x-full");
        divToggleRelative.appendChild(divToggleDot);

        const divRead = document.createElement("div");
        divRead.setAttribute("class", "text-gray-700 font-medium");
        divRead.textContent = "Read";
        labelToggle.appendChild(divRead);

        return divToggle;
    }

    getHTMLCard() {

        //First level of contorls:
        const divBook = document.createElement("div");
        divBook.id = "book-" + this.#id;
        divBook.setAttribute("class", "book div-book-card");

        //Second level of controls:
        const inputImageEdit = document.createElement("input");
        inputImageEdit.id = "edit-" + this.#id;
        inputImageEdit.setAttribute("type", "image");
        inputImageEdit.setAttribute("src", "img/mode_edit_black_24dp.svg");
        inputImageEdit.setAttribute("alt", "edit icon");
        inputImageEdit.classList.add("edit-book-button");
        divBook.appendChild(inputImageEdit);

        const divBookInfo = document.createElement("div");
        divBookInfo.classList.add("div-book-info");
        divBookInfo.appendChild(this.#getHTMLBookInfoImg());
        divBookInfo.appendChild(this.#getHTMLBookInfoText());
        divBook.appendChild(divBookInfo);

        const divBookControls = document.createElement("div");
        divBookControls.classList.add("div-book-controls");
        divBookControls.appendChild(this.#getHTMLBookControlsCheckBox());
        divBookControls.appendChild(this.#getHTMLBookControlsToggel());
        divBook.appendChild(divBookControls);

        return divBook;
    }

    get id() {
        return this.#id;
    }

    get selected() {
        return this.#selected;
    }

    set selected(newValue) {
        this.#selected = newValue;
    }

    read() {
        this.#wasRead = !this.#wasRead;
    }

    set title(newValue) {
        this.#title = newValue;
    }
    set author(newValue) {
        this.#author = newValue;
    }
    set npages(newValue) {
        this.#npages = newValue;
    }
    set wasRead(newValue) {
        this.#wasRead = newValue;
    }

    get title() {
        return this.#title;
    }
    get author() {
        return this.#author;
    }
    get npages() {
        return this.#npages;
    }
    get wasRead() {
        return this.#wasRead;
    }

    get picURL() {
        return this.#picURL;
    }
}