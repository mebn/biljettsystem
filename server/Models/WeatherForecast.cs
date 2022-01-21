/*
This is just an example.

This is what the API will recive.
The returned JSON will look something like this:

{
    date: "2022-01-21T20:49:29.6714854+01:00",
    temperatureC: 35,
    temperatureF: 94,
    summary: "Cool"
},
...

where date, temperatureC etc are named in the WeatherForecast class.
*/


namespace server.Models {
    public class WeatherForecast {
        public DateTime Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

        public string? Summary { get; set; }
    }
}
