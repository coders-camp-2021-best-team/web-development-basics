import { render } from '../shared/dom';
import { Navbar, Footer } from '../components';
import { HomePage, SearchPage, NotFound } from '.';

const template = `
    <div id="app-router">
        <template id="app-navbar"></template>
        <main>
            <template id="app-main"></template>
        </main>
        <template id="app-footer"></template>
    </div>
`;

export const Router = ({ renderOn }) => {
    render({ html: template, on: renderOn });

    Navbar({ renderOn: '#app-navbar' });
    Footer({ renderOn: '#app-footer' });

    let options = { renderOn: '#app-main' };
    switch (window.location.pathname) {
        case '/':
            HomePage(options);
            break;

        case '/search':
            SearchPage(options);
            break;

        default:
            NotFound(options);
            break;
    }
};
