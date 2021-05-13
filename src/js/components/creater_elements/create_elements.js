function CreaterElements() {
    this.createElem = function(tag) {
        this.elem = document.createElement(tag)
        return this
    }
    this.createClass = function(className) {
        this.elem.classList.add(className)
        return this
    }
    this.createText = function(text) {
        this.elem.innerText = text
        return this
    }
    this.createAttr = function(attr, value) {
        this.elem.setAttribute(attr, value)
        return this
    }
    this.createAppend = function(parent) {
        document.querySelector(parent).append(this.elem)
    }
}
export { CreaterElements }
