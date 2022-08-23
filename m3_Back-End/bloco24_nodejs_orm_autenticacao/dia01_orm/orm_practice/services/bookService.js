const model = require('../src/models');
const { Op } = require("sequelize");

const getAll = async () => {
  const books = await model.Book.findAll({
    order: [['title', 'ASC']],
  });
  return books;
};

const getByAuthor = async (name) => {
  const books = await model.Book.findAll({
    where: { author: { [Op.like]: `%${name}%` } },
    order: [['title', 'ASC']],
  });

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

const remove = async (id) => {
  const book = await model.Book.destroy({ where: { id } });
  return book;
};

module.exports = { getAll, findById, create, update, remove, getByAuthor };
