import express from 'express';
import bodyParser from 'body-parser';
import { login, authors, postAuthor, deleteAuthor, authors_books, deleteBook, postBook, author_books, editBook, editAuthor, refresh, findBook } from './controllers';
import { adminCheck, authorCheck, userAccessCheck, verifyToken, bookAccessCheck } from './middlewares';
import cors from 'cors'

const app = express();
const port = 5000;

app.use(bodyParser.json())
app.use(cors({ origin: 'http://localhost:3000' }))

// login user
app.post('/login', login)

// refresh token
app.post('/refresh', refresh)

/**
 * 
 * AUTHORS
 * 
 */

// list of authors and their books
app.post('/authors_books', verifyToken, userAccessCheck, authorCheck, authors_books)

// get specific author and their books
app.get('/author_books/:id', verifyToken, adminCheck, userAccessCheck, authorCheck, author_books)

// create new author
app.post('/author', verifyToken, adminCheck, postAuthor)

// edit specific author
app.put('/author/:id', verifyToken, adminCheck, editAuthor)

// delete specific author
app.delete('/author/:id', verifyToken, adminCheck, deleteAuthor)

// list of authors without books
app.post('/authors', verifyToken, adminCheck, authors)

/**
 * 
 * BOOKS
 * 
 */
// get specific book
app.get('/book/:id', verifyToken, authorCheck, bookAccessCheck, findBook)

// edit specific book
app.put('/book/:id', verifyToken, authorCheck, bookAccessCheck, editBook)

// create new book
app.post('/book', verifyToken, authorCheck, bookAccessCheck, postBook)

// delete a specific book
app.delete('/book/:id', verifyToken, authorCheck, bookAccessCheck, deleteBook)

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
