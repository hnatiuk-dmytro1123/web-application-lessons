
import axios from 'axios';
import { IWeatherForecastService } from './interfaces/i.weather-forecast.service';
import { WeatherForecastDto } from '../dtos/weather-forecast.dto';
import { error } from 'console';

interface OpenWeatherMapModel {
    name: string;
    main: {
        humidity: number;
        pressure: number;
        temp_max: number;
        temp_min: number;
    };
}

export class OpenWeatherForecastService implements IWeatherForecastService {
    private apiUrl: string = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=5796abbde9106b7da4febfae8c44c232";

    getByLocation(location: string): WeatherForecastDto {
        throw 'Not initialized.';
    }

    async getByLocationAsync(location: string): Promise<WeatherForecastDto> {
        const response = await axios.get(this.apiUrl);
        const model = response.data;
  
        return {
          location: model.name,
          humidity: model.main.humidity,
          pressure: model.main.pressure,
          tempMax: model.main.temp_max,
          tempMin: model.main.temp_min,
        };
    }
}
