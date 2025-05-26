const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

router.get('/', async (req, res) => {
  const { title, author, genre } = req.query;

  let filter = {};
  if (title) filter.title = { $regex: title, $options: 'i' };
  if (author) filter.author = { $regex: author, $options: 'i' };
  if (genre) filter.genre = { $regex: genre, $options: 'i' };

  try {
    const books = await Book.find(filter);
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
