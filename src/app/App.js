import { render } from '../shared/dom';
import { Router, routes } from '../route';
import { HomeScreen, BaseScreen } from '../screens';

const template = `
    <template id="app-basescreen"></template>
`;

export const App = ({ renderOn }) => {
    render({ html: template, on: renderOn }, false);


    BaseScreen({ renderOn: '#app-basescreen' });

    Router({
        // TODO: add your components
        routes: [
            {
                component: HomeScreen,
                route: routes.home
            }
            // {
            //     component: SearchScreen,
            //     route: routes.search
            // },
            // {
            //     component: Error404Screen,
            //     route: routes.error404
            // }
        ],
        on: '#app-main'
    });
};
