import { CreaterElements } from '../creater_elements/create_elements'

function initFooter() {
    const footer = new CreaterElements()
    footer.createElem('header').createClass('footer').createAppend('#root')
}
export { initFooter }
