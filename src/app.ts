require('dotenv').config();

import express from 'express';

import config from 'config';
import db from '../config/db';
import Logger from '../config/logger';
import router from './router';

const app = express();

app.use(express.json());

const port = config.get<number>('port');

app.use('/api', router);

app.listen(port, async () => {
  await db();
  Logger.info(`Aplicação sendo executada na porta: ${port}`);
});
