const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  description: String,
  year: Number
});

module.exports = mongoose.model('Book', BookSchema);
