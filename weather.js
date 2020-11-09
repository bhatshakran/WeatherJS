class Weather{
	constructor(city) {
		this.api_key = "786685e224064f92b9fbe9f033504f2e";
		this.city = city;
		// this.country = country;
	}

// Fetch Weather from API
	async getWeather() {
		 const response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${this.city}&key=786685e224064f92b9fbe9f033504f2e`)
		 const weatherInfo = await response.json();
		 return weatherInfo.data[0];
	}

	// change weather location
	changeLocation(city) {
		this.city = city;
		
	}
}