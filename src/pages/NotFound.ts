import { ComponentOptions } from '../interfaces/ComponentOptions';
import { render } from '../shared/dom';

const template = `
    <div>
        <h1>HTTP 404: Not found.</h1>
    </div>
`;

export const NotFound = ({ renderOn }: ComponentOptions) => {
    render(template, renderOn);
};
