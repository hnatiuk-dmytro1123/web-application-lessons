import { Module } from '@nestjs/common';
import { DemoWeatherForecastService } from './components/weather-forecast-component/services/demo-weather-forecast.service';
import { WeatherForecastController } from './weather-forecast.controller';
import { OpenWeatherForecastService } from './components/weather-forecast-component/services/open-weather-forecast.service';

@Module({
  imports: [],
  controllers: [WeatherForecastController],
  providers: [
    DemoWeatherForecastService,
    OpenWeatherForecastService
  ],
})
export class AppModule { }
