const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (req, res) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
});

router.get('/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

  res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  res.status(201).json(newProduct);
});

router.delete('/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  if (!products) return res.status(204).json({ message: 'Produto deletado' });

  res.status(404).json({ message: 'Produto inexistente' });
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductModel.update(req.params.id, name, brand);

  if (!products.affectedRows) return res.status(404).json({ message: 'Produto inexistente' });

  res.status(200).json({ message: 'Produto alterado' });
});

module.exports = router;