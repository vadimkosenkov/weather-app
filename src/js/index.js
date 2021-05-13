import '../styling/index.css';
import { header } from './components/header/header';
import { main } from './components/main/main';
import { footer } from './components/footer/footer';

const root = document.querySelector('#root');
root.append(header);
root.append(main);
root.append(footer);

const time = document.querySelector('.time');
const country = document.querySelector('.country');
const temp = document.querySelector('.temp');
const description = document.querySelector('.description');
const icon = document.querySelector('.icon');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind_speed');

function timeValidation(hours, minutes) {
    const tmpHours = hours < 10 ? `0${hours}` : hours;
    const tmpMinutes = minutes < 10 ? `0${minutes}` : minutes;

    time.innerText = `${tmpHours}:${tmpMinutes}`;
}

setInterval(() => {
    const timeValue = new Date()
    timeValidation(timeValue.getHours(), timeValue.getMinutes())
}, 1000)


function weather(_cityID) {
    const cityID = _cityID;
    const apiUrl = 'https://api.openweathermap.org/data/2.5/';
    const apiKey = '444c2bfd114207e49fbfe7ecd26904d1';
    const apiQuery = `${apiUrl}/weather?id='${cityID}'&units=metric&lang=ru&appid='${apiKey}`

    fetch(apiQuery)
        .then(response => response.json())
        .then(data => {
            country.innerText = `${data.name}, ${data.sys.country}`;
            temp.innerText = `${Math.round(data.main.temp)}°C`;
            const newDescription = data.weather[0].description;
            const upperDescription = newDescription[0].toUpperCase() + newDescription.slice(1);
            description.innerText = upperDescription;
            humidity.innerText = `Относительная влажность: ${data.main.humidity}%`;
            windSpeed.innerText = `Скорость ветра: ${data.wind.speed}м/с`;
            icon.setAttribute('src', `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
        })
        .catch(error => console.error(`Ошибка получение погоды. Причина:${error}`));
}

const PLACES = [625144, 627907, 629634, 627904, 620127, 625665];
weather(PLACES[0]);

let counter = 0;
setTimeout(function updateWeather() {
    weather(PLACES[counter]);
    counter = counter === PLACES.length - 1 ? 0 : counter + 1;

    setTimeout(updateWeather, 3000);
}, 0);

// class WheatherWidget {
//     constructor() {}
//     getWeather() {
//         weather(PLACES[0])
//     }
// }

// const weatherWidget = new WheatherWidget
// weatherWidget.getWeather()// const weatherWidget = new WheatherWidget
// weatherWidget.getWeather()
