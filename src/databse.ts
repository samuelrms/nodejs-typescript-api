import config, { IConfig } from 'config';
import { connect as mongooseConnect, connection } from 'mongoose';

const dbConfig: IConfig = config.get('App.database');

export const connect = async (): Promise<void> => {
  await mongooseConnect(dbConfig.get('mongoUrl'));
  if (connection.readyState === 1) {
    console.log('Connected to MongoDB');
  } else {
    console.log('Failed to connect to MongoDB');
  }
};

export const close = (): Promise<void> => connection.close();
