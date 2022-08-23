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

const update = async (id, { title, author, pageQuantity }) => {
  const updatedBook = await model.Book.update(
    { title, author, pageQuantity },
    { where: { id } },
  );

  return updatedBook;
}

module.exports = { getAll, findById, create, update };
