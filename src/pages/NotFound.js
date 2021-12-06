import { render } from '../shared/dom';

const template = `
    <div>
        <h1>HTTP 404: Not found.</h1>
        <a href="/">Go back home!</a>
    </div>
`;

export const NotFound = ({ renderOn }) => {
    render({ html: template, on: renderOn });
};
