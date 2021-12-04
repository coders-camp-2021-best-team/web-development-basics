import { render } from '../shared/dom';
import ApiProvider from '../providers/ApiProvider';

const template = `
    <div>Hello world!</div>
`;

export const App = ({ renderOn }) => {
    render({ on: renderOn, html: template });

    ApiProvider.search('Interstellar')
        .then((v) => console.debug(JSON.stringify(v)))
        .catch(console.error);
};
