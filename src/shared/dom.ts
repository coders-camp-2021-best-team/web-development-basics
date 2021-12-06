export function elementFrom(html: string) {
    const template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.firstChild;
}

export function render(html: string, on: string | Element, drawInstead = true) {
    const placeholder =
        typeof on === 'string' ? document.querySelector(on) : on;
    const element = elementFrom(html);

    if (drawInstead) {
        placeholder.parentNode.replaceChild(element, placeholder);
        return element;
    } else {
        placeholder.replaceChildren(element);
        return element;
    }
}
