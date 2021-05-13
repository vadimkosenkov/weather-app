import { CreaterElements } from '../creater_elements/create_elements'

function initMain() {
    const main = new CreaterElements()
    main.createElem('main').createClass('main').createAppend('#root')
    main.createElem('mainH1').createClass('h1').createText('Погода').createAppend('.main')
    main.createElem('div').createClass('country').createAppend('.main')
    main.createElem('div').createClass('temp_block').createAppend('.main')
    main.createElem('span').createClass('temp').createAppend('.temp_block')
    main.createElem('img').createClass('icon').createAttr('src', ' ').createAppend('.temp_block')
    main.createElem('span').createClass('description').createAppend('.temp_block')
    main.createElem('div').createClass('humidity').createAppend('.main')
    main.createElem('div').createClass('wind_speed').createAppend('.main')
}
export { initMain }
