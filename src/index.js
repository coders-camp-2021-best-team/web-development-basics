import 'regenerator-runtime/runtime'; //async/await with Parcel
import { App } from './app/App';

window.addEventListener('click', (e) => {
    if (e.target instanceof HTMLAnchorElement) {
        const href = e.target.href;

        e.preventDefault();
        console.log('redirecting', href);
        history.pushState({}, href, href);

        window.onload(null);
    }
});

window.onload = () => App('#app');
