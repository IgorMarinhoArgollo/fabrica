import * as express from 'express';
import errorMiddleware from './middlewares/errorMiddlewares';

const app = express();
app.use(express.json());

app.use(errorMiddleware);

export default app;