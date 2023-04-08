import * as express from 'express';

const login = express.Router();

login.post('/login', (req, res) => res.json({ ok: true }));


export default login;
