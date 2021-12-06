import { ComponentOptions } from '../interfaces/ComponentOptions';
import { render } from '../shared/dom';

const template = `
    <div>
        <h1>Hello!</h1>
        <a href="/contact">Contact</a>
    </div>
`;

export const HomePage = ({ renderOn }: ComponentOptions) => {
    render(template, renderOn);
};
