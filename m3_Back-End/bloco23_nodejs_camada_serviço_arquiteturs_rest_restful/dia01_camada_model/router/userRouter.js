const express = require('express');
const User = require('../model/User');
const middleware = require('../middlewares');

const router = express.Router();

router.post('/', middleware.postUserMidd, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const newUser = await User.addUser({ firstName, lastName, email, password });

  return res.status(201).json(newUser);
});

router.get('/', async (_req, res) => {
  const users = await User.getAllUsers();

  return res.status(200).json(users);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.getUserById(id);

  if (!user) return res.status(404).json({ message: 'User Not found' });

  return res.status(200).json(user);
});

module.exports = router;
