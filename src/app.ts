import * as express from 'express';
import errorMiddleware from './middlewares/errorMiddlewares';
import limiter from './middlewares/limiter';
import helmet from 'helmet';
import * as morgan from 'morgan';

import loginRouter from './routers/loginRouter';
import categoryRouter from './routers/categoryRouter';
import productRouter from './routers/productRouter';
import authMiddleware from './middlewares/authMiddleware';


const app = express();

app.use(helmet());
app.use(limiter);
app.use(express.json());
app.use(morgan('common'));

app.use('/auth', loginRouter);
app.use('/category', authMiddleware, categoryRouter);
app.use('/product', authMiddleware, productRouter);

app.use(errorMiddleware);

export default app;