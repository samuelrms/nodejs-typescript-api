export interface StormGlassPoint {
  readonly time: string;
  readonly waveHeight: SwellDirection;
  readonly waveDirection: SwellDirection;
  readonly swellDirection: SwellDirection;
  readonly swellHeight: SwellDirection;
  readonly swellPeriod: SwellDirection;
  readonly windDirection: SwellDirection;
  readonly windSpeed: SwellDirection;
}

export interface SwellDirection {
  [key: string]: number;
}

export interface Meta {
  cost: number;
  dailyQuota: number;
  end: string;
  lat: number;
  lng: number;
  params: string[];
  requestCount: number;
  source: string[];
  start: string;
}

export interface StormGlassResponse {
  hours: StormGlassPoint[];
  meta: Meta;
}

export interface ForeCastPoint {
  time: string;
  swellDirection: number;
  swellHeight: number;
  swellPeriod: number;
  waveDirection: number;
  waveHeight: number;
  windDirection: number;
  windSpeed: number;
}
