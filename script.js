let myLibrary=[];

function Book(title, author, description, pages,){
    this.title=title
    this.author=author
    this.description = description
    this.pages=pages
    this.isRead= true
   
    this.toggleRead = function(){
        return this.isRead === true ? false : true;
    }
}
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const description = document.querySelector("#description");
    const pages = document.querySelector("#pages");
    const btnAddBook = document.querySelector(".add");

const localStorage = window.localStorage;

// btnAddBook.addEventListener("click", e =>{
//     e.preventDefault()
//     const book = new Book(title.value, author.value, description.value, pages.value);
//     localStorage.setItem(myLibrary.push(book));
//     console.log("Libro:" +book)
// })


    


function displayBooks(myLibrary){
    myLibrary.forEach(book => {      
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
        removeBookBtn.classList.add("btn-addBook")

        bookContainer.append(bookDiv);
        bookDiv.classList.add("bookDiv");
        bookDiv.append(title, author, description, pages, removeBookBtn);
        console.log(bookContainer.childNodes);
        removeBookBtn.addEventListener("click", ()=>{
            console.log(book)
            myLibrary.splice(myLibrary.indexOf(book),1);
        })

    });
}

function removeBook(removeBtn, book){
    

}

const book1 = new Book('Las aventuras de pepe', 'pepe', 'el mejor libro', 5);
const book2 = new Book('Las aventuras de pioi', 'Ploin', 'el mejor libro', 5);
document.querySelector("form")
        .addEventListener("submit", e => {
            e.preventDefault()
            const data= Object.fromEntries(
            new FormData(e.target)
        );            
           const book = JSON.parse(JSON.stringify(data)); 
           console.log(book.title);
           const newBook= new Book(book.title, book.author, book.description, book.pages);

           myLibrary.push(newBook);
           
           const bookContainer = document.querySelector(".book-container");
        const bookDiv = document.createElement("div");
        const title = document.createElement("h2");
        const author = document.createElement("p");
        const description = document.createElement("p");
        const pages = document.createElement("p");
        const removeBook = document.createElement("button");

        title.textContent = newBook.title;
        author.textContent = newBook.author;
        description.textContent = newBook.description;
        pages.textContent = newBook.pages;
        removeBook.textContent = "Remove book";
        removeBook.classList.add("btn-addBook")

        bookContainer.append(bookDiv);
        bookDiv.classList.add("bookDiv");
        bookDiv.append(title, author, description, pages, removeBook); 
           
          
           
        })

myLibrary.push(book1);
myLibrary.push(book2);
displayBooks(myLibrary);
console.log(myLibrary)