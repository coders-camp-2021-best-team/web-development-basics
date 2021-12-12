import { render } from '../../shared/dom';



const template = (ID, className, onClick, text, type) => `
    <button id = "${ID}" class='btn ${className}' type="${type}" onClick="${onClick()}">${text}</button>
`;

export const Button = ({ ID, className, onClick, text, type}) => {
    render({ html: template(ID, className, onClick, text, type), on: renderOn });

    document.getElementById(`${ID}`).onclick = onClick;
};
