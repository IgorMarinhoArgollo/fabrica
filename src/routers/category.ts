import * as express from 'express';
import categoryController from '../controllers/categoryController';

const category = express.Router();

category.get('/', categoryController);

export default category;