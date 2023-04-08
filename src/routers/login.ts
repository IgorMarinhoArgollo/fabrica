import * as express from 'express';
import loginController from '../controllers/loginController';

const login = express.Router();

login.post('/login', loginController);


export default login;
