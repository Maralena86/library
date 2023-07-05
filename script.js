let myLibrary = [];

//Create a book
function Book(title, author, description, pages) {
	this.title = title;
	this.author = author;
	this.description = description;
	this.pages = pages;
	this.isRead = true;

	this.toggleRead = function () {
		return this.isRead === true ? false : true;
	};
}

const localStorage = window.localStorage;

function addBook(book) {
	const bookContainer = document.querySelector(".book-container");
	const bookDiv = document.createElement("div");
	const title = document.createElement("h2");
	const author = document.createElement("p");
	const description = document.createElement("p");
	const pages = document.createElement("p");
	const removeBookBtn = document.createElement("button");

	title.textContent = book.title;
	author.textContent = book.author;
	description.textContent = book.description;
	pages.textContent = book.pages;
	removeBookBtn.textContent = "Remove book";
	removeBookBtn.classList.add("btn-addBook");
    

	bookContainer.append(bookDiv);
	bookDiv.classList.add("bookDiv");
	bookDiv.append(title, author, description, pages, removeBookBtn);

	removeBookBtn.addEventListener("click", (e) => {
		e.target.parentNode.remove();
	});
}

function displayBooks(myLibrary) {
	myLibrary.forEach((book) => {
		addBook(book);
	});
}

document.querySelector("form").addEventListener("submit", (e) => {
	e.preventDefault();

	const data = Object.fromEntries(new FormData(e.target));
	const book = JSON.parse(JSON.stringify(data));
	const newBook = new Book(
		book.title,
		book.author,
		book.description,
		book.pages
	);

	myLibrary.push(newBook);
    addBook(newBook);
	console.log(myLibrary);
});

displayBooks(myLibrary)



