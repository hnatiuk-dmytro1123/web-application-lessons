using DemoWebApplication.Components.WeatherForecastComponent.Dtos;

namespace DemoWebApplication.Components.WeatherForecastComponent.Services.Interfaces;

public interface IWeatherForecastService
{
    WeatherForecastDto GetByLocation(string location);
    Task<WeatherForecastDto> GetByLocationAsync(string location);
}