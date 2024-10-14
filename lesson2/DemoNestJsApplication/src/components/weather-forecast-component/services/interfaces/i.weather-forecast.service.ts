import { WeatherForecastDto } from "../../dtos/weather-forecast.dto";

export interface IWeatherForecastService {
    getByLocation(location: string): WeatherForecastDto;
    getByLocationAsync(location: string): Promise<WeatherForecastDto>;
}
