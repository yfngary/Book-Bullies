import React, { useEffect } from 'react';
import './booklist.css';

function BookList(props) {
// const [books, setBooks] = useState([]);
const { getBooks, books } = props
useEffect(() => {
    getBooks();
}, [])
  return (
    <div>
      <h1>Book List</h1>
      <ul className='book-list'>
        {books && books.map(book => (
          <li key={book.book_id} className='book-item'>
            <h2>{book.title}</h2>
            <p>{book.personal}</p>
            <h3>{book.genre}</h3>
            <p>{book.summary}</p>
            <p>{book.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;