import 'regenerator-runtime/runtime'; //async/await with Parcel
import { App } from './app/App';

window.onload = () => {
    return App({ renderOn: '#movie-app' });
};
