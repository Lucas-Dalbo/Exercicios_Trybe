const express = require('express');
const User = require('../model/User');

const router = express.Router();

router.post('/', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const newUser = await User.addUser({ firstName, lastName, email, password });
  res.status(201).json(newUser);
});

module.exports = router;
