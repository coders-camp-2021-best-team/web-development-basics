import 'regenerator-runtime/runtime'; //async/await with Parcel
import { App } from './app/App';
import Logger from './utils/ConsoleLogger';

export const redirect = (href, cleanup = true) => {
    Logger.debug('Redirecting to ', href);

    if (cleanup) {
        clearInterval(window.timer);
    }

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
