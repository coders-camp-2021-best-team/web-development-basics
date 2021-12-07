import { render } from '../shared/dom';
import { Navbar, Footer } from '../components';
import { Router, HomePage, SearchPage, NotFound } from '../pages';

const template = `
    <div>
        <template id="app-navbar"></template>
        <main>
            <template id="app-main"></template>
        </main>
        <template id="app-footer"></template>
    </div>
`;

export const App = ({ renderOn }) => {
    render({ html: template, on: renderOn }, false);

    Navbar({ renderOn: '#app-navbar' });
    Footer({ renderOn: '#app-footer' });

    Router({
        routes: {
            '/': HomePage,
            '/search/(.*)': SearchPage,
            '.*': NotFound
        },
        on: '#app-main'
    });
};
