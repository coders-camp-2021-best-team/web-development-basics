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

    let path = window.location.pathname + '/';
    while (path.match('//')) {
        path = path.replace('//', '/');
    }

    const endpoints = path.substr(1).split('/');

    console.debug({ path, endpoints });

    const options = { renderOn: '#app-main' };

    if (endpoints[0] == '') {
        HomePage(options);
    } else if (endpoints[0] == 'search') {
        SearchPage(options, { query: endpoints[1] });
    } else {
        NotFound(options);
    }
};
