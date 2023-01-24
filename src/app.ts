require('dotenv').config();

import express from 'express';

import config from 'config';
import db from '../config/db';
import Logger from '../config/logger';
import MorganMiddleware from './middleware/MorganMiddleware';
import router from './router';

const app = express();
const port = config.get<number>('port');

app.use(express.json());
app.use(MorganMiddleware);
app.use('/api', router);

app.listen(port, async () => {
  await db();
  Logger.info(`Aplicação sendo executada na porta: ${port}`);
});
