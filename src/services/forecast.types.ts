import { ForeCastPoint } from '@src/clients/stormGlass.types';

export enum BeachPosition {
  S = 'S',
  E = 'E',
  W = 'W',
  N = 'N',
}

export interface IBeach {
  name: string;
  position: BeachPosition;
  lat: number;
  lng: number;
  user: string;
}

export interface BeachForecast extends Omit<IBeach, 'user'>, ForeCastPoint {}

export interface TimeForecast {
  time: string;
  forecast: BeachForecast[];
}
