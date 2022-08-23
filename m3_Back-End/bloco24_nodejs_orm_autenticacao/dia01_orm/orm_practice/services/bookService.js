const model = require('../src/models');

const getAll = async () => {
  const books = await model.Book.findAll();
  return books;
};

module.exports = { getAll };
