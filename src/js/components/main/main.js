export const main = document.createElement('main');
main.classList.add('main');
root.append(main);

const mainH1 = document.createElement('h1');
mainH1.innerText = 'Погода';
main.append(mainH1);

const mainDivCountry = document.createElement('div');
mainDivCountry.classList.add('country');
main.append(mainDivCountry);

const mainDivTempBlock = document.createElement('div');
mainDivTempBlock.classList.add('temp_block');
main.append(mainDivTempBlock);

const tempInTempBlock = document.createElement('span');
tempInTempBlock.classList.add('temp');
mainDivTempBlock.append(tempInTempBlock);

const iconInTempBlock = document.createElement('img');
iconInTempBlock.classList.add('icon');
iconInTempBlock.setAttribute('src', ' ');
mainDivTempBlock.append(iconInTempBlock);

const descriptionInTempBlock = document.createElement('span');
descriptionInTempBlock.classList.add('description');
mainDivTempBlock.append(descriptionInTempBlock);

const mainHumidity = document.createElement('div');
mainHumidity.classList.add('humidity');
main.append(mainHumidity);

const mainWindSpeed = document.createElement('div');
mainWindSpeed.classList.add('wind_speed');
main.append(mainWindSpeed);