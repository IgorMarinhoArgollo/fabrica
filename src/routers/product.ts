import * as express from 'express';

const product = express.Router();

product.get('/', (req, res) => res.json({ ok: true }));
product.get('/:id', (req, res) => res.json({ ok: true }));
product.get('/', (req, res) => res.json({ ok: true }));
product.get('/:id', (req, res) => res.json({ ok: true }));
product.get('/:id', (req, res) => res.json({ ok: true }));

export default product;