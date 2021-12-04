import { render } from '../shared/dom';
import apiService from '../services/ApiService';

const template = `
    <div>Hello world!</div>
`;

export const App = ({ renderOn }) => {
    render({ on: renderOn, html: template });

    apiService
        .request('GET', '/title/find', {
            q: 'Avengers'
        })
        .then((v) => console.log(JSON.stringify(v)))
        .catch(console.error);
};
