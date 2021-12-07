import { render } from '../shared/dom';
import { Router, routes } from '../route';
import { SearchScreen } from '../screens';

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
        // TODO: add your components
        routes: [
            {
                component: () => null,
                route: routes.home
            },
            {
                component: SearchScreen,
                route: routes.search
            }
            // {
            //     component: Error404Screen,
            //     route: routes.error404
            // }
        ],
        on: '#app-main'
    });
};
