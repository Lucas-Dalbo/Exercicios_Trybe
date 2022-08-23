const model = require('../src/models');

const getAll = async () => {
  const books = await model.Book.findAll();
  return books;
};

const findById = async (id) => {
  const book = await model.Book.findByPk(id,
    { attributes: ['id', 'title', 'author', 'pageQuantity'] });
  return book;
};

const create = async ({ title, author, pageQuantity }) => {
  const newBook = await model.Book.create({ title, author, pageQuantity });

  return newBook;
}

module.exports = { getAll, findById, create };
