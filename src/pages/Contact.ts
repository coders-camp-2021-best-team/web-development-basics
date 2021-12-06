import { ComponentOptions } from '../interfaces/ComponentOptions';
import { render } from '../shared/dom';

const template = `
    <div>
        <h1>Contact!</h1>
        <a href="/home">go Home!</a>
    </div>
`;

export const ContactPage = ({ renderOn }: ComponentOptions) => {
    render(template, renderOn);
};
