import 'regenerator-runtime/runtime'; //async/await with Parcel
import { App } from './app/App';

const BASE_API_URL = process.env.API_BASE_URL || 'https://google.com';

window.onload = () =>
  App({ renderOn: '#movie-app', options: { apiUrl: BASE_API_URL } });
