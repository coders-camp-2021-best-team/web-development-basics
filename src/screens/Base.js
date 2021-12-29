import { render } from '../shared/dom';
import { Router, routes } from '../route';
import { Header, Footer } from '../components';
import {
    HomeScreen,
    DetailsScreen,
    SearchScreen,
    FavoriteScreen
} from '../screens';
import { Category } from './Category';

const template = `
    <div>
        <template id="app-header"></template>
        <main>
            <template id="app-main"></template>
        </main>
        <template id="app-footer"></template>
    </div>
`;

export const BaseScreen = ({ renderOn }) => {
    render({ html: template, on: renderOn });

    Header({ renderOn: '#app-header' });
    Footer({ renderOn: '#app-footer' });

    Router({
        // TODO: add your components
        routes: [
            {
                component: HomeScreen,
                route: routes.home
            },
            {
                component: SearchScreen,
                route: routes.search
            },
            // {
            //     component: Error404Screen,
            //     route: routes.error404
            // }
            {
                component: DetailsScreen,
                route: routes.details
            },
            {
                component: FavoriteScreen,
                route: routes.favorites
            },
            {
                component: Category,
                route: routes.category
            }
        ],
        on: '#app-main'
    });
};
