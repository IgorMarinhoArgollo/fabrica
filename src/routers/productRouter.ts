import * as express from 'express';
import { getAllController, getByIdController, createController} from '../controllers/productController';

const productRouter = express.Router();

productRouter.get('/', getAllController);
productRouter.get('/:id', getByIdController);
productRouter.post('/', createController);
// productRouter.patch('/:id', ;
// productRouter.delete('/:id', ;

export default productRouter;