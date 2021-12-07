import { render } from '../shared/dom';

const template = (query) => `
    <div>
        <h1>Search "${query}"!</h1>
        <a href="/">go Home!</a>
    </div>
`;

export const SearchPage = ({ renderOn }, params) => {
    render({ html: template(params[0]), on: renderOn });
};
