import { render } from '../shared/dom';
import ApiProvider from '../providers/ApiProvider';

const template = `
    <div>Hello world!</div>
`;

export const App = ({ renderOn }) => {
    render({ on: renderOn, html: template });

    ApiProvider.search('Minions')
        .then((v) => console.debug(v))
        .catch(console.error);
};
