import config from 'config';
import express from 'express';
import router from './router';

const app = express();

app.use(express.json());

const port = config.get<number>('port');

app.use('/api', router);

app.listen(port, async () => {
  console.log(`Aplicação sendo executada na porta: ${port}`);
});
