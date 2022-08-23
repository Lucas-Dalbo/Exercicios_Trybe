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

module.exports = { getAll, findById };
