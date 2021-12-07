export function elementFrom(html) {
    const template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.firstChild;
}

export function render({ html, on }, drawInstead = true) {
    const placeholder =
        typeof on === 'string' ? document.querySelector(on) : on;
    const element = elementFrom(html);

    if (drawInstead) {
        placeholder.parentNode.replaceChild(element, placeholder);
    } else {
        placeholder.replaceChildren(element);
    }
    return element;
}
