require('dotenv').config();

import config from 'config';
import db from '../config/db';
import express from 'express';
import router from './router';

const app = express();

app.use(express.json());

const port = config.get<number>('port');

app.use('/api', router);

app.listen(port, async () => {
  await db();
  console.log(`Aplicação sendo executada na porta: ${port}`);
});
