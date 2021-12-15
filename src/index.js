import 'regenerator-runtime/runtime'; //async/await with Parcel
import { App } from './app/App';
import Logger from './utils/ConsoleLogger';

const redirect = (href) => {
    Logger.debug('Redirecting to ', href);
    history.pushState({}, href, href);

    window.onload();
};

window.addEventListener('click', (e) => {
    if (e.target instanceof HTMLAnchorElement) {
        e.preventDefault();
        redirect(e.target.href);
    }
});

window.addEventListener('popstate', (e) => {
    e.preventDefault();
    redirect(window.location.origin);
});

window.onload = () => App({ renderOn: '#app' });
