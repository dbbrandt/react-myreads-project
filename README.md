# MyReads Project

This is the final assessment project for Udacity's React Fundamentals course. 
The MyReads project is a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. 
The project emphasizes using React to build the application that access a Udacity API server which persist information and provides a query
interface to lookup books.

## TL;DR

To install and run the app:
* Clone the repo
* Change directory to reactnd-projects-myreads-starter
* install all project dependencies with `npm install` 
* start the development server with `npm start`

## Files in this project
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with the Udacity api.
├── package.json # npm package manager file. 
├── public
│   ├── favicon.ico # React Icon
│   └── index.html 
└── src
    ├── App.css # Styles for the app. Added spinner to the basic sytles provided.
    ├──  ******************** New Components **********************************
    ├── App.js # The root of the app. Maintains the majority of state and renders the top level components. 
    ├── Bookcase.js # The the home page component that displayes the shelves and related books the user selected. 
    ├── SearchBooks.js # The search page component that provides a shearch bar and search results. 
    ├── Bookshelf.js # Component representing a single shelf in the bookcase. 
    ├── Book.js # Component for a book the renders the image and details. Shared by Bookself and SearchBooks components. 
    ├── SelectBookshelf.js # Component that provides the dropdown to change a book's shelf or add search book to a shelf. 
    ├──  **********************************************************************
    ├── App.test.js # Used for testing. Provided with Create React App. 
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. 
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```
## Functionality

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

* Currently Reading
* Want to Read
* Read

### Persistence
The bookshelves will persist in the backend accessable by a unique value stored in the browsers local storage. 

### Homepage
The homepage of the MyReads App shows the title "MyReads" and then three shelves, which are named "Currently Reading," "Want to Read," and "Read." 
There are books on each shelf. Each book has a green circle in the bottom right-hand corner. 
The app has a green plus sign icon in the bottom right-hand corner.

* Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. The default value for the control should always be the current shelf the book is in.

The green circle in the right-hand cover of the first book is clicked. You see a menu that has the following options: "Move To," "Currently Reading," "Want to Read," Read," and "None." The "Move to" option is greyed out. 
There is a checkmark next to the shelf the book currently resided in. 
The main page  has a link to /search, a green plus sign in the lower right, which navigates to the search page that allows you to find books to add to your library.

### Search Page
The search page provides and input field that is used to find books. The search is initiated anytime the input field is changed. The books that match that query are displayed on the page, along with the same control to change the shelf fond in the homepage. 
Most books will show a shelf of "None". Change this to another value will add it to the persistent books in the homepage.that lets you add the book to your library. 

A book on a bookshelf, it should have the same state on both the main application page and the search page.

The search page also has a link to / (the root URL), which leads back to the main page.

When you navigate back to the main page from the search page, you should instantly see all of the selections you made on the search page in your library.




## Udacity Books Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
