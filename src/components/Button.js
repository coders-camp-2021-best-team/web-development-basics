import { render } from '../shared/dom';



const template = (className, onClick, text, type) => `
    <button class='btn ${className}' type="${type}" onClick="${onClick()}">${text}</button>
`;

export const Button = ({ className, onClick, text, type }) => {
    render({ html: template(className, onClick, text, type), on: renderOn });
};
