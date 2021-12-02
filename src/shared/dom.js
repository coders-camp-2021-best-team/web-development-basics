export function elementFrom({html}) {
    const template = document.createElement('template');
    template.innerHTML =  html.trim();
    return template.content.firstChild;
}

export function render({html, on}){
    const placeholder = typeof on === "string" ? document.querySelector(on) : on
    const element = elementFrom({html})
    placeholder.parentNode.replaceChild(element,placeholder)
    return element;
}