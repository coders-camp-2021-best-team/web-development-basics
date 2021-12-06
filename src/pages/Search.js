import { render } from '../shared/dom';

const template = `
    <div>
        <h1>Search!</h1>
        <a href="/">go Home!</a>
    </div>
`;

export const SearchPage = ({ renderOn }) => {
    render({ html: template, on: renderOn });
};
