import { render } from '../shared/dom';
import ApiProvider from '../providers/ApiProvider';

const template = `
    <div id="app">
        <div>Hello world!</div>
    </div>
`;

export const App = async ({ renderOn }) => {
    render({ on: renderOn, html: template });
};
