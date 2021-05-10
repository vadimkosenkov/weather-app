const time = document.querySelector('.time')
const country = document.querySelector('.country')
const temp = document.querySelector('.temp')
const description = document.querySelector('.description')
const icon = document.querySelector('.icon')
const humidity = document.querySelector('.humidity')
const windSpeed = document.querySelector('.wind_speed')

function timeValidation(hours, minutes) {
    if (hours < 10) {
        hours = '0' + hours
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    time.innerText = `${hours}:${minutes}`
}
setTimeout(function getTime() {
    const timeValue = new Date()
    timeValidation(timeValue.getHours(), timeValue.getMinutes())
    setTimeout(getTime, 1000)
}, 0)

function weather(_cityID) {
    let cityID = _cityID,
        apiUrl = "https://api.openweathermap.org/data/2.5/",
        apiKey = "444c2bfd114207e49fbfe7ecd26904d1",
        apiQuery = apiUrl + "/weather?id=" + cityID + "&units=metric&lang=ru&appid=" + apiKey;

    fetch(apiQuery)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            country.innerText = `${data.name}, ${data.sys.country}`
            temp.innerText = Math.round(data.main.temp) + '°C'
            let newDescription = data.weather[0].description
            let upperDescription = newDescription[0].toUpperCase() + newDescription.slice(1)
            description.innerText = upperDescription
            humidity.innerText = `Относительная влажность: ${data.main.humidity}%`
            windSpeed.innerText = `Скорость ветра: ${data.wind.speed}%`
            icon.setAttribute('src', 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png')

        })
        .catch(error => console.error("Ошибка получение погоды. Причина: " + error));
}

const PLACES = [625144, 627907, 629634, 627904, 620127, 625665];
weather(PLACES[0]);

let counter = 0;
setTimeout(function updateWeather() {
    weather(PLACES[counter]);
    counter === (PLACES.length - 1) ? counter = 0 : counter++;
    setTimeout(updateWeather, 3000);
}, 0);

// class WheatherWidget {
//     constructor() {}
//     getWeather() {
//         weather(PLACES[0])
//     }
// }

// const weatherWidget = new WheatherWidget
// weatherWidget.getWeather()