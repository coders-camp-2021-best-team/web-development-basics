import { observerListener } from '../../shared/observer';

export const Button = ({ onClick, id, text, type, className }) => {
    observerListener(id, onClick);
    return `
    <button id="${id}" class="btn ${className}" type="${type}">${text}</button>
    `;
};
