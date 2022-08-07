const express = require('express');
const User = require('../model/User');
const middleware = require('../middlewares');

const router = express.Router();

router.post('/', middleware.postUserMidd, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const newUser = await User.addUser({ firstName, lastName, email, password });
  res.status(201).json(newUser);
});

module.exports = router;
