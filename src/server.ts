import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { Application } from 'express';

import { ForecastController } from './controllers/forecast';
import './utils/module-alias';
import * as database from '@src/databse';

export class SetupServer extends Server {
  constructor(private port = 7777) {
    super();
  }

  public async init(): Promise<void> {
    this.setupExpress();
    this.setupControllers();
    await this.databaseSetup();
    await this.close();
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
  }

  private setupControllers(): void {
    const forecastController = new ForecastController();
    this.addControllers([forecastController]);
  }

  private async databaseSetup(): Promise<void> {
    await database.connect();
  }

  public async close(): Promise<void> {
    await database.close();
  }

  public getApp(): Application {
    return this.app;
  }
}
