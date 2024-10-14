using DemoWebApplication.Components.WeatherForecastComponent.Dtos;
using DemoWebApplication.Components.WeatherForecastComponent.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace DemoWebApplication.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {

        private readonly IWeatherForecastService _weatherForecastService;

        public WeatherForecastController(IWeatherForecastService weatherForecastService)
        {
            _weatherForecastService = weatherForecastService;
        }

        [HttpGet]
        public WeatherForecastDto GetByLocation()
        {
           var res = _weatherForecastService.GetByLocation("Kyiv");
            return res;
        }

        //[HttpGet("sync")]
        //public WeatherForecastDto GetSyncByLocation()
        //{
        //    Task.Delay(30_000).Wait();
        //    var res = _weatherForecastService.GetByLocation("Kyiv");
        //    return res;
        //}

        //[HttpGet("async")]
        //public async Task<WeatherForecastDto> GetAsyncByLocation()
        //{
        //    await Task.Delay(30_000);
        //    var res = await _weatherForecastService.GetByLocationAsync("Kyiv");
        //    return res;
        //}
    }
}
