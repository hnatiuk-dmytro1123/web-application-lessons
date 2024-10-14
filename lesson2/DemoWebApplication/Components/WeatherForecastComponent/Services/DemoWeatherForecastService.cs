using DemoWebApplication.Components.WeatherForecastComponent.Dtos;
using DemoWebApplication.Components.WeatherForecastComponent.Services.Interfaces;

namespace DemoWebApplication.Components.WeatherForecastComponent.Services;

public class DemoWeatherForecastService : IWeatherForecastService
{
    public WeatherForecastDto GetByLocation(string location)
    {
        return new WeatherForecastDto()
        {
            Location = "Kyiv",
            Humidity = 1,
            Pressure = 1,
            TempMax = 1,
            TempMin = 1
        };
    }

    public async Task<WeatherForecastDto> GetByLocationAsync(string location)
    {
        return GetByLocation(location);
    }
}