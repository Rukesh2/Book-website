const mongoose = require('mongoose');
const Book = require('./models/Book');

const MONGO_URI = 'your-mongodb-connection-string-here'; // Replace with your URI

const sampleBooks = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    description: "A fantasy novel about a hobbit's adventure.",
    year: 1937
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    description: "A novel about totalitarianism and surveillance.",
    year: 1949
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    description: "A story of racial injustice in the American South.",
    year: 1960
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    description: "Classic romance and societal commentary.",
    year: 1813
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    description: "A story of wealth, love, and the American Dream.",
    year: 1925
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    description: "The first book in the famous Harry Potter series.",
    year: 1997
  }
];

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB');

    // Remove existing books (optional)
    await Book.deleteMany({});

    // Insert sample books
    await Book.insertMany(sampleBooks);

    console.log('Sample books inserted!');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Error:', err);
  });
