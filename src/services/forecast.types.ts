import { ForeCastPoint } from '../clients/stormGlass.types';
import { IBeach } from '../models/beach';

export interface BeachForecast extends Omit<IBeach, 'user'>, ForeCastPoint {}

export interface TimeForecast {
  time: string;
  forecast: BeachForecast[];
}
