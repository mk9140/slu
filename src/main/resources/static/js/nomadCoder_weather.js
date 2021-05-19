'use strict';


const API_KEY = 'faec2717d69c0ef123e06cdc95f04067'; //https://openweathermap.org/ API키
const COORDS = 'coordinate';
const weatherContainer = document.querySelector(".js-weather");

function getWeather(lat,lon) {
	// 정보 request
	fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
		.then((response) => response.json())
		.then(function (json){
			const temperature = json.main.temp;
			const place = json.name;
			weatherContainer.innerText = `${temperature}°C @ ${place}`;
		})
	;
}

function saveCoordsObj(coorsObj) {
	localStorage.setItem(COORDS, JSON.stringify(coorsObj));
}


function handleGeoSuccess(position) {
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	const coordsObj = {
		latitude,
		longitude,
	};
	saveCoordsObj(coordsObj);

}

function handleGeoError() {
	console.log(`can not access geo loc`);
}

// 웹브라우저가 유저에게 사용자정보:위치 습득 허용을 묻게된다.
function askForCoords() {
	navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);

}

function loadCoords() {
	const loadedCoords = localStorage.getItem(COORDS);
	// 저장된 위치정보가 없으면
	if (loadedCoords === null) {
		// 유저 위치정보 습득
		askForCoords();
	}else{
		// 위치 정보가 있다면
		// 파싱
		const parseCoords = JSON.parse(loadedCoords);
		getWeather(parseCoords.latitude, parseCoords.longitude);
	}
}

function init() {
	loadCoords();

}
init();