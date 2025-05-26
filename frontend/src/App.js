import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [filters, setFilters] = useState({ title: '', author: '', genre: '' });

  // Fetch books from backend with filters
  const fetchBooks = async () => {
    const query = new URLSearchParams(filters).toString();
    const response = await fetch(`http://localhost:5000/api/books?${query}`);
    const data = await response.json();
    setBooks(data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleInputChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleFilter = (e) => {
    e.preventDefault();
    fetchBooks();
  };

  return (
    <div className="container">
      <h1>Book List</h1>
      <form onSubmit={handleFilter} className="filter-form">
        <input
          name="title"
          placeholder="Filter by Title"
          value={filters.title}
          onChange={handleInputChange}
          className="filter-input"
        />
        <input
          name="author"
          placeholder="Filter by Author"
          value={filters.author}
          onChange={handleInputChange}
          className="filter-input"
        />
        <input
          name="genre"
          placeholder="Filter by Genre"
          value={filters.genre}
          onChange={handleInputChange}
          className="filter-input"
        />
        <button type="submit" className="filter-button">Filter</button>
      </form>

      <ul className="book-list">
        {books.length === 0 ? (
          <p>No books found.</p>
        ) : (
          books.map((book) => (
            <li key={book._id} className="book-item">
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Genre:</strong> {book.genre}</p>
              <p><strong>Year:</strong> {book.year}</p>
              <p>{book.description}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
