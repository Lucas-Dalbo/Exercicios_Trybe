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

const findById = async (req, res) => {
  const { id } = req.params
  try {
    const book = await bookService.findById(id);

    if(!book) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json(book);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  };
};

module.exports = { getAll, findById };