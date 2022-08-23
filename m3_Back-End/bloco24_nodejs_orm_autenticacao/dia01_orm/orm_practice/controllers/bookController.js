const bookService = require('../services/bookService');

const getAll = async (_req, res) => {
  try {
    const books = await bookService.getAll();
    return res.status(200).json(books);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  };
};

module.exports = { getAll };