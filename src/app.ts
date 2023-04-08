import * as express from 'express';
import errorMiddleware from './middlewares/errorMiddlewares';
import limiter from './middlewares/limiter';
import helmet from 'helmet';
import * as morgan from 'morgan';

import login from './routers/auth';
import category from './routers/category';
import product from './routers/product';


const app = express();

app.use(helmet());
app.use(limiter);
app.use(express.json());
app.use(morgan('common'));

app.use('/auth', login);
app.use('/category', category);
app.use('/product', product);

app.use(errorMiddleware);

export default app;