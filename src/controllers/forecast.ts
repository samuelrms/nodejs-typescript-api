import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';
import { Beach } from '../models/beach';
import { Forecast } from '../services/forecast';

const forecast = new Forecast();

@Controller('forecast')
export class ForecastController {
  @Get('')
  public async getForecastLoggedUser(_: Request, res: Response): Promise<void> {
    try {
      const beaches = await Beach.find();
      const forecastData = await forecast.processForecastForBeaches(beaches);

      res.status(200).send(forecastData);
    } catch (error) {
      // if (error instanceof Error) {
      // console.warn({ error: error?.message });
      // }
      res.status(500).send({ error: 'Something went wrong' });
    }
  }
}
