import { WeatherForecastDto } from "../dtos/weather-forecast.dto";
import { IWeatherForecastService } from "./interfaces/i.weather-forecast.service";

export class DemoWeatherForecastService implements IWeatherForecastService {
    getByLocation(location: string): WeatherForecastDto {
        return {
            location: "Kyiv",
            humidity: 1,
            pressure: 1,
            tempMax: 1,
            tempMin: 1
        };
    }

    async getByLocationAsync(location: string): Promise<WeatherForecastDto> {
        return this.getByLocation(location);
    }
}