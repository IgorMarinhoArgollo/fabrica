import * as express from 'express';

const category = express.Router();

category.get('/', (req, res) => res.json({ ok: true }));

export default category;