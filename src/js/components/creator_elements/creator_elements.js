function CreatorElements(tagName, parent, className, text) {
    this.selector = document.createElement(tagName);
    document.querySelector(parent).append(this.selector);
    if (className) {
        this.selector.className = className;
    }
    if (text) {
        this.selector.innerText = text;
    }
}

CreatorElements.prototype.getTagName = function() {
    return this.selector.tagName;
};
CreatorElements.prototype.getClassName = function() {
    return this.selector.className;
};
CreatorElements.prototype.getContent = function() {
    return this.selector.innerText;
};
CreatorElements.prototype.getId = function() {
    return this.selector.id;
};
CreatorElements.prototype.setClassName = function(className) {
    this.selector.className = className;
    return this;
};
CreatorElements.prototype.addClassName = function(className) {
    this.selector.classList.add(className);
    return this;
};
CreatorElements.prototype.setContent = function(text) {
    this.selector.innerText = text;
    return this;
};
CreatorElements.prototype.setHTML = function(text) {
    this.selector.innerHTML = text;
    return this;
};
CreatorElements.prototype.setAttribute = function(name, value) {
    this.selector.setAttribute(name, value);
    return this;
};
CreatorElements.prototype.setAppend = function(parent) {
    document.querySelector(parent).append(this.selector);
    return this;
};
CreatorElements.prototype.setId = function(id) {
    this.selector.id = id;
    return this;
};

export { CreatorElements };