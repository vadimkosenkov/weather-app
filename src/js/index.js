import '../styling/index.css';
import { initElements, elements } from './components/elements/elements';
import { CreatorElements } from './components/creator_elements/creator_elements';

initElements();

const translator = {
    condition: {
        clear: 'ясно',
        'partly-cloudy': 'малооблачно',
        cloudy: 'облачно с прояснениями',
        overcast: 'пасмурно',
        drizzle: 'морось',
        'light-rain': 'небольшой дождь',
        rain: 'дождь',
        'moderate-rain': 'умеренно сильный дождь',
        'heavy-rain': 'сильный дождь',
        'continuous-heavy-rain': 'длительный сильный дождь',
        showers: 'ливень',
        'wet-snow': 'дождь со снегом',
        'light-snow': 'небольшой снег',
        snow: 'снег',
        'snow-showers': 'снегопад',
        hail: 'град',
        thunderstorm: 'гроза',
        'thunderstorm-with-rain': 'дождь с грозой',
        'thunderstorm-with-hail': 'гроза с градом',
    },
};

function getGeo(cityName) {
    ymaps.geocode(cityName).then(coordinatesInfo => {
        const coordinates = coordinatesInfo.geoObjects.get(0).geometry.getCoordinates();
        map.panTo(coordinates); //смещение карты по новым координатам
        weather(coordinates[0], coordinates[1]); //получение данных погоды новых координат
    });
}

function init() {
    const suggestView1 = new ymaps.SuggestView('suggest');
    suggestView1.events.add('select', cityName => getGeo(cityName.get('item').value));
}
let map = null;

function mapView() {
    map = new ymaps.Map('map', {
        center: [53.902241, 27.560019],
        zoom: 10,
    });
}

ymaps.ready(init);
ymaps.ready(mapView);

let detailsArr;

function weather(latArg, lonArg) {
    const apiUrl = 'https://api.weather.yandex.ru/v2/forecast?';
    const apiKey = '08f8cc4e-1db4-49b8-85b8-32f6411ed1d9';
    const options = { headers: new Headers({ 'X-Yandex-API-Key': apiKey }) };
    const lat = latArg;
    const lon = lonArg;
    const apiQuery = `${apiUrl}lat=${lat}&lon=${lon}&lang=ru_RU&limit=7`;

    fetch(apiQuery, options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            detailsArr = data.forecasts;
            detailsWeather();
            tempValidation('', data.fact.temp, 'tempBlockTemp');
            tempValidation('Вчера в это время ', data.yesterday.temp, 'yesturdayTemp');
            tempValidation('Ощущается как ', data.fact.feels_like, 'feelsTemp');
            translateCondition('factCondition', data.fact.condition);
            elements.country.selector.innerText = `Погода ${data.geo_object.locality.name}`;
            elements.factWindSpeed.selector.innerText = `${data.fact.wind_speed} м/с`;
            elements.factHumidity.selector.innerText = `${data.fact.humidity}%`;
            elements.factPressure.selector.innerText = `${data.fact.pressure_mm} мм.рт.ст`;
            elements.tempBlockIconWhite.selector.setAttribute(
                'src',
                `https://yastatic.net/weather/i/icons/funky/light/${data.fact.icon}.svg`
                // `https://yastatic.net/weather/i/icons/blueye/color/svg/${data.fact.icon}.svg`
            );
        })
        .catch(error => `Ошибка получение погоды. Причина:${error}`);
}
weather('53.902241', '27.560019');

function tempValidation(text, t, selector) {
    if (t === 0) {
        elements[selector].selector.innerText = `0°`;
    } else if (t > 0) {
        elements[selector].selector.innerText = `${text}+${t}°`;
    }
}

function timeValidation(hours, minutes) {
    const tmpHours = hours < 10 ? `0${hours}` : hours;
    const tmpMinutes = minutes < 10 ? `0${minutes}` : minutes;
    elements.time.selector.innerText = `Сейчас ${tmpHours}:${tmpMinutes}. `;
}

(function timeUpdate() {
    setInterval(() => {
        const timeValue = new Date();
        timeValidation(timeValue.getHours(), timeValue.getMinutes());
    }, 1000);
})();

function translateCondition(selector, translate) {
    elements[selector].selector.innerText = upperLetter(translator.condition[translate]);
}

function upperLetter(word) {
    return word[0].toUpperCase() + word.slice(1);
}

function detailsWeather() {
    elements.factDetailsBlock.setHTML('');
    let tmpHour = new Date().getHours() + 1;
    let currentDetailsArr = detailsArr[0].hours;
    console.log(detailsArr);
    for (let i = 1; i < 7; i++) {
        if (tmpHour > 23) {
            tmpHour = 0;
            currentDetailsArr = detailsArr[1].hours;
        }
        const newContainer = new CreatorElements('span', '.fact_details_block', `fact_details_container_${i}`);
        newContainer.addClassName('fact_details_container');

        const divFirst = new CreatorElements(
            'div',
            `.fact_details_container_${i}`,
            `fact_details_time_${i}`,
            `${tmpHour}:00`
        );
        divFirst.addClassName('fact_details_time');

        const img = new CreatorElements('img', `.fact_details_container_${i}`, `fact_details_icon_${i}`);
        img.setAttribute('src', `https://yastatic.net/weather/i/icons/funky/light/${currentDetailsArr[tmpHour].icon}.svg`);
        img.addClassName('fact_details_icon');

        const divSecond = new CreatorElements('div', `.fact_details_container_${i}`, `fact_details_temp_${i}`, '3');
        divFirst.addClassName('fact_details_temp');

        tmpHour++;
    }
}
