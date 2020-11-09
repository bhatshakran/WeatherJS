class UI{
	constructor() {
		this.location = document.getElementById('w-location');
		this.description = document.getElementById('w-des');
		this.string = document.getElementById('w-string');
		this.icon = document.getElementById('w-image');
		this.humidity = document.getElementById('w-humidity');
		this.dewpoint = document.getElementById('w-dewpoint');
		this.sunrise = document.getElementById('w-sunrise');
		this.sunset = document.getElementById('w-sunset');
		this.wind = document.getElementById('w-wind');
		
	}

	showWeather(weathers){
		this.location.textContent = `City: ${weathers.city_name}`;
		this.description.textContent = `Decription: ${weathers.weather.description}`;
		this.string.textContent = `Temp: ${weathers.app_temp} deg C`;
		this.icon.setAttribute('src', weathers.weather.icon);
		this.humidity.textContent = `Relative humidity: ${weathers.rh}`;
		this.dewpoint.textContent = `Dewpoint: ${weathers.dewpt}`;
		this.sunrise.textContent = `Sunrise: ${weathers.sunrise}`;
		this.sunset.textContent = `Sunset: ${weathers.sunset}`;
		this.wind.textContent = `Wind Speed: ${weathers.wind_spd}`;
}
}