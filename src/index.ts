import config from 'config';
import dotenv from 'dotenv';

import { SetupServer } from './server';

(async (): Promise<void> => {
  dotenv.config();
  const server = new SetupServer(config.get('App.port'));
  await server.init();
  server.start();
})();
