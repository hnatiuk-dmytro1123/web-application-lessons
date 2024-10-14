import { Controller, Get } from '@nestjs/common';
import { Request, Response } from 'express';
import { IWeatherForecastService } from './components/weather-forecast-component/services/interfaces/i.weather-forecast.service';
import { DemoWeatherForecastService } from './components/weather-forecast-component/services/demo-weather-forecast.service';
import { WeatherForecastDto } from './components/weather-forecast-component/dtos/weather-forecast.dto';
import { OpenWeatherForecastService } from './components/weather-forecast-component/services/open-weather-forecast.service';

@Controller()
export class WeatherForecastController {

    private readonly weatherForecastService: IWeatherForecastService;

    constructor(weatherForecastService: OpenWeatherForecastService) {
        this.weatherForecastService = weatherForecastService;
    }

    @Get()
    public getByLocation(req: Request, res: Response) : WeatherForecastDto {
        const result = this.weatherForecastService.getByLocation("Kyiv");
        return result;
    }

    @Get("async")
    public async getAsyncByLocation(req: Request, res: Response): Promise<WeatherForecastDto> {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const result = await this.weatherForecastService.getByLocationAsync("Kyiv");
        return result;
    }
}
