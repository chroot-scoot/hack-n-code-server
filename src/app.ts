import express from 'express';
import 'express-async-errors';
import { createServer } from 'http';

import cors from 'cors';
import helmet from 'helmet';
import { accessLogger as logger } from './middlewares/request-logger.middleware';
import { notFoundHandler } from './middlewares/not-found.middleware';
import { globalErrorHandler } from './middlewares/error-handler.middleware';

import { port, allowedOrigin } from './common/config';

const app = express();
const httpServer = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(
  cors({
    origin: allowedOrigin,
  })
);
app.use(logger);

app.get('/', (req, res) => {
  res.send('<h1>Hello, World</h1>');
});

app.use(notFoundHandler);
app.use(globalErrorHandler);

httpServer.listen(port, () => {
  console.log(`Server Listening to port: ${port}...`);
});
