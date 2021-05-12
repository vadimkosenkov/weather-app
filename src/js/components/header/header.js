export const header = document.createElement('header');
header.classList.add('header');
root.append(header);

const headerSpanIntro = document.createElement('span');
headerSpanIntro.classList.add('intro');
headerSpanIntro.innerText = 'Weather-app by Vadim Kosenkov';
header.append(headerSpanIntro);

const headerTimeContainer = document.createElement('span');
headerTimeContainer.classList.add('time_container');
header.append(headerTimeContainer);

const spanInTimeContainer = document.createElement('span');
spanInTimeContainer.innerText = 'Время:';
headerTimeContainer.append(spanInTimeContainer);

const timeInTimeContainer = document.createElement('span');
timeInTimeContainer.classList.add('time');
headerTimeContainer.append(timeInTimeContainer);