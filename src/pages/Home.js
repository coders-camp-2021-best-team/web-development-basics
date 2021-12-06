import { render } from '../shared/dom';

const template = `
    <div>
        <h1>Hello!</h1>
        <a href="/search">Search</a>
    </div>
`;

export const HomePage = ({ renderOn }) => {
    render({ html: template, on: renderOn });
};
