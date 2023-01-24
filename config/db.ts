import mongoose from 'mongoose';
import config from 'config';
import Logger from './logger';

async function connect() {
  const dbURI = config.get<string>('dbURI');

  try {
    await mongoose.connect(dbURI);
    Logger.info('Banco de dados Conectado!');
  } catch (error) {
    Logger.error('Não foi possível se contectar ao banco de dados!');
    Logger.error(error);
  }
}

export default connect;
