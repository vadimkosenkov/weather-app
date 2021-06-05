import { CreatorElements } from '../creator_elements/creator_elements';

const elements = {};

function initElements() {
    // Header
    elements.header = new CreatorElements('header', '#root', 'header');
    elements.headerInner = new CreatorElements('div', '.header', 'header_inner');
    elements.headerAuthor = new CreatorElements(
        'span',
        '.header_inner',
        'header_author',
        'Weather-app by Vadim Kosenkov'
    );
    elements.suggest = new CreatorElements('input', '.header_inner')
        .setId('suggest')
        .setAttribute('type', 'text')
        .setAttribute('placeholder', 'Город или район');

    // Main / Section 1 / weather widget
    elements.main = new CreatorElements('main', '#root', 'main');
    elements.sectionOne = new CreatorElements('section', '.main', 'section_one');
    elements.weatherWidget = new CreatorElements('div', '.section_one', 'weather_widget');
    elements.weatherWidgetBlock = new CreatorElements('div', '.weather_widget', 'weather_widget_block');
    elements.weatherMap = new CreatorElements('div', '.section_one', 'weather_map');
    elements.titleCounty = new CreatorElements('div', '.weather_widget_block', 'title_country');
    elements.country = new CreatorElements('div', '.title_country', 'country');
    elements.time = new CreatorElements('span', '.weather_widget_block', 'time');
    elements.yesturdayTemp = new CreatorElements('span', '.weather_widget_block', 'yesturday_temp');
    elements.factTempBlock = new CreatorElements('div', '.weather_widget_block', 'fact_temp_block');
    elements.tempBlockTemp = new CreatorElements('span', '.fact_temp_block', 'fact_temp');
    elements.tempBlockIconWhite = new CreatorElements('img', '.fact_temp_block', 'fact_icon');

    elements.factConditionBlock = new CreatorElements('div', '.fact_temp_block', 'fact_condition_block');
    elements.factCondition = new CreatorElements('div', '.fact_condition_block', 'fact_condition');
    elements.feelsTemp = new CreatorElements('div', '.fact_condition_block', 'feels_temp');
    elements.factDescriptionBlock = new CreatorElements('div', '.weather_widget_block', 'fact_description');

    elements.factWindBlock = new CreatorElements('span', '.fact_description', 'fact_wind_block');
    elements.factWindIcon = new CreatorElements('img', '.fact_wind_block', 'fact_wind_icon');
    elements.factWindIcon.setAttribute('src', './img/wind_icon.png');
    elements.factWindSpeed = new CreatorElements('span', '.fact_wind_block', 'fact_wind_speed');

    elements.factHumidityBlock = new CreatorElements('span', '.fact_description', 'fact_humidity_block');
    elements.factHumidityIcon = new CreatorElements('img', '.fact_humidity_block', 'fact_humidity_icon');
    elements.factHumidityIcon.setAttribute('src', './img/humidity_icon.png');
    elements.factHumidity = new CreatorElements('span', '.fact_humidity_block', 'fact_humidity');

    elements.factPressureBlock = new CreatorElements('span', '.fact_description', 'fact_pressure_block');
    elements.factPressureIcon = new CreatorElements('img', '.fact_pressure_block', 'fact_pressure_icon');
    elements.factPressureIcon.setAttribute('src', './img/pressure_icon.png');
    elements.factPressure = new CreatorElements('span', '.fact_pressure_block', 'fact_pressure');

    elements.factDetailsBlock = new CreatorElements('div', '.weather_widget_block', 'fact_details_block');

    // Main / Section 2 / map
    elements.map = new CreatorElements('div', '.weather_map');
    elements.map.setId('map');

    // Main / Section 2
    // elements.sectionTwo = new CreatorElements('section', '.main', 'section_two');
    // elements.sectionTwoInner = new CreatorElements('div', '.section_two', 'section_two__inner');
    // Footer
    // elements.footer = new CreatorElements('footer', '#root', 'footer');
}
export { initElements };
export { elements };
