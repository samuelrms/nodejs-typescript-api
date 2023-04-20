import { StormGlass } from '@src/clients/stormGlass';
import { Beach, BeachForecast } from './forecast.types';

export class Forecast {
  constructor(protected stormGlass = new StormGlass()) {}

  public async processForecastForBeaches(
    beaches: Beach[]
  ): Promise<BeachForecast[]> {
    const pointsWithCorrectSources: BeachForecast[] = [];

    for (const beach of beaches) {
      const points = await this.stormGlass.fetchPoints(beach.lat, beach.lng);

      const enrichedBeachData = points.map((pointData) => ({
        ...{
          lat: beach.lat,
          lng: beach.lng,
          name: beach.name,
          position: beach.position,
          rating: 1,
        },
        ...pointData,
      }));

      pointsWithCorrectSources.push(...enrichedBeachData);
    }

    return pointsWithCorrectSources;
  }
}
