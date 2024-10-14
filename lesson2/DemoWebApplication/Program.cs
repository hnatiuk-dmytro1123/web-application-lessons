using DemoWebApplication.Components.WeatherForecastComponent.Services;
using DemoWebApplication.Components.WeatherForecastComponent.Services.Interfaces;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddTransient<IWeatherForecastService, OpenWeatherForecastService>();

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.MapControllers();

app.Run();
