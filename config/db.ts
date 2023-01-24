import mongoose from 'mongoose';
import config from 'config';

async function connect() {
  const dbURI = config.get<string>('dbURI');

  try {
    await mongoose.connect(dbURI);
    console.log('Banco de dados Conectado!');
  } catch (error) {
    console.log('Não foi possível se contectar ao banco de dados!');
    console.log(error);
  }
}

export default connect;
