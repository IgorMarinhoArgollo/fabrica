import * as express from 'express';
import { getAllController, getByIdController, createController, updateController, deleteController} from '../controllers/productController';

const productRouter = express.Router();

productRouter.get('/', getAllController);
productRouter.get('/:id', getByIdController);
productRouter.post('/', createController);
productRouter.patch('/:id', updateController);
productRouter.delete('/:id', deleteController);

export default productRouter;