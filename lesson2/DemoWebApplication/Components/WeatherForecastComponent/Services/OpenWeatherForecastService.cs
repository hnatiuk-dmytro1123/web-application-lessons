using DemoWebApplication.Components.WeatherForecastComponent.Dtos;
using DemoWebApplication.Components.WeatherForecastComponent.Models;
using DemoWebApplication.Components.WeatherForecastComponent.Services.Interfaces;
using Newtonsoft.Json;

namespace DemoWebApplication.Components.WeatherForecastComponent.Services;

public class OpenWeatherForecastService : IWeatherForecastService
{
    public WeatherForecastDto GetByLocation(string location)
    {
        var apiUrl =
            "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=5796abbde9106b7da4febfae8c44c232";
        
        using var httpClient = new HttpClient();
        var resp = httpClient.GetAsync(apiUrl).Result;
        var json = resp.Content.ReadAsStringAsync().Result;

        var model = JsonConvert.DeserializeObject<OpenWeatherMapModel>(json);

        return new WeatherForecastDto()
        {
            Location = model.Name,
            Humidity = model.Main.Humidity,
            Pressure = model.Main.Pressure,
            TempMax = model.Main.TempMax,
            TempMin = model.Main.TempMin
        };
    }

    public async Task<WeatherForecastDto> GetByLocationAsync(string location)
    {
        var apiUrl =
            "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=5796abbde9106b7da4febfae8c44c232";

        using var httpClient = new HttpClient();
        var resp = await httpClient.GetAsync(apiUrl);
        var json = await resp.Content.ReadAsStringAsync();

        var model = JsonConvert.DeserializeObject<OpenWeatherMapModel>(json);

        return new WeatherForecastDto()
        {
            Location = model.Name,
            Humidity = model.Main.Humidity,
            Pressure = model.Main.Pressure,
            TempMax = model.Main.TempMax,
            TempMin = model.Main.TempMin
        };
    }
}