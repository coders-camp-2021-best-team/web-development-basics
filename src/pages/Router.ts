import { ComponentOptions } from '../interfaces/ComponentOptions';
import { render } from '../shared/dom';
import { Navbar, Footer } from '../components';
import { HomePage, ContactPage, NotFound } from '.';

const template = `
    <div id="app-router">
        <template id="app-navbar"></template>
        <main>
            <template id="app-main"></template>
        </main>
        <template id="app-footer"></template>
    </div>
`;

export const Router = ({ renderOn }: ComponentOptions) => {
    render(template, renderOn);

    Navbar('#app-navbar');
    Footer('#app-footer');

    let options: ComponentOptions = { renderOn: '#app-main' };
    if (window.location.pathname === '/home') {
        HomePage(options);
    } else if (window.location.pathname === '/contact') {
        ContactPage(options);
    } else {
        NotFound(options);
    }
};
