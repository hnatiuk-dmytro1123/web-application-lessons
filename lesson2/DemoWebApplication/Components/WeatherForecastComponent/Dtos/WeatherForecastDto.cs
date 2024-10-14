namespace DemoWebApplication.Components.WeatherForecastComponent.Dtos
{
    public class WeatherForecastDto
    {
        public string Location { get; set; } = string.Empty;
        public double TempMin { get; set; } = 0;
        public double TempMax { get; set; } = 0;
        public int Pressure { get; set; } = 0;
        public int Humidity { get; set; } = 0;
    }
}
