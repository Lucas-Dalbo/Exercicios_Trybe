const bookService = require('../services/bookService');

const getAll = async (req, res) => {
  const { q } = req.query;
  try {
    const books = q ? await bookService.getByAuthor(q) : await bookService.getAll();
    return res.status(200).json(books);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  };
};

const findById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await bookService.findById(id);

    if(!book) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json(book);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  };
};

const create = async (req, res) => {
  const  { title, author, pageQuantity } = req.body;
  try {
    const newBook = await bookService.create({ title, author, pageQuantity });

    return res.status(201).json(newBook);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  };
};

const update = async (req, res) => {
  const { id } = req.params;
  const  { title, author, pageQuantity } = req.body;
  try {
    const [updatedBook] = await bookService.update(id, { title, author, pageQuantity });

    if(!updatedBook) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json({ message: 'Book updated!' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  };
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await bookService.remove(id);

    if(!book) return res.status(404).json({ message: 'Book not found' });

    return res.status(204).json({ message: 'Book deleted!' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  };
};

module.exports = { getAll, findById, create, update, remove };