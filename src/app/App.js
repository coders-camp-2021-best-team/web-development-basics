import { render } from '../shared/dom';
import { Router } from '../pages';

const template = `
    <div>
        <main>
            <template id="app-main"></template>
        </main>
    </div>
`;

export const App = ({ renderOn }) => {
    render({ html: template, on: renderOn }, false);

    Router({
        routes: {},
        on: '#app-main'
    });
};
