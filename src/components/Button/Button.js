import { render } from '../../shared/dom';



const observer = (id, callback, event = 'click') => {
    const observer = new MutationObserver((_, obs) => {
        const element = document.getElementById(`${id}`);
        if (element) {
            element.addEventListener(event, callback);
            obs.disconnect();
            return;
        }
    });
    observer.observe(document, {
        childList: true,
        subtree: true
    });
};

const Button = ({ onClick, id, text, type, className }) => {
    observer(id, onClick);
    return `
    <button id="${id}" class="btn ${className}" type="${type}">${text}</button>
    `;
};