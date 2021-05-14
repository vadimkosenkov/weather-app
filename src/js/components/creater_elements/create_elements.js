function CreaterElements() {}
CreaterElements.prototype.createElem = function(tag) {
    this.elem = document.createElement(tag)
    return this
}
CreaterElements.prototype.createClass = function(className) {
    this.elem.classList.add(className)
    return this
}
CreaterElements.prototype.createText = function(text) {
    this.elem.innerText = text
    return this
}
CreaterElements.prototype.createAttr = function(attr, value) {
    this.elem.setAttribute(attr, value)
    return this
}
CreaterElements.prototype.createAppend = function(parent) {
    document.querySelector(parent).append(this.elem)
}

export { CreaterElements }
