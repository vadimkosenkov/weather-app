import { CreaterElements } from '../creater_elements/create_elements'

function initHeader() {
    const header = new CreaterElements()
    header.createElem('header').createClass('header').createAppend('#root')
    header.createElem('span').createClass('intro').createText('Weather-app by Vadim Kosenkov').createAppend('.header')
    header.createElem('span').createClass('time_container').createAppend('.header')
    header.createElem('span').createClass('string_time').createText('Время:').createAppend('.time_container')
    header.createElem('span').createClass('time').createText('Время:').createAppend('.time_container')
}
export { initHeader }
