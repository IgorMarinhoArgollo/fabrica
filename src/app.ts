import * as express from 'express';
import errorMiddleware from './middlewares/errorMiddlewares';
import limiter from './middlewares/limiter';
import helmet from 'helmet';
import * as morgan from 'morgan';


const app = express();

app.use(helmet());
app.use(express.json());
app.use(limiter);
app.use(morgan('common'));

app.get('/', (req, res) => res.json({ ok: true }));

app.use(errorMiddleware);

export default app;