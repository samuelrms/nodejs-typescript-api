import { ForeCastPoint } from '@src/clients/stormGlass.types';
import { IBeach } from '@src/models/beach';

export interface BeachForecast extends Omit<IBeach, 'user'>, ForeCastPoint {}

export interface TimeForecast {
  time: string;
  forecast: BeachForecast[];
}
