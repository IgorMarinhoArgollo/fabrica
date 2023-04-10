import * as express from 'express';
import categoryController from '../controllers/categoryController';

const categoryRouter = express.Router();

categoryRouter.get('/', categoryController);

export default categoryRouter;