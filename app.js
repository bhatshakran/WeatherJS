// init weather object
const weather = new Weather('Srinagar' );

// init ui object
const ui = new UI();

// load weather on document load
document.addEventListener('DOMContentLoaded', getWeather);
 // change weather on event
 document.getElementById('w-change-btn').addEventListener('click', ()=>{
 	const city = document.getElementById('city').value;
 	weather.changeLocation(city);
 	// get and display weather
 	getWeather();
 	// close modal
 	$('#locModal').modal('hide')
 })
 function getWeather() {
 	weather.getWeather()
.then(result=>{
	ui.showWeather(result);
})
.catch(err=>console.log(err));
 }
