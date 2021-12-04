import { render } from '../shared/dom';
import ApiProvider from '../providers/ApiProvider';

const template = (movies) => `
    <div id="app">
        <div>Hello world!</div>
        <ol>
            ${movies.reduce((r, movie) => r + `<li>${movie}</li>`, '')}
        </ol>
    </div>
`;

export const App = async ({ renderOn }) => {
    let movies = [];
    let data = await ApiProvider.search('Fast & Furious');
    console.debug(data);

    for (const result of data.results) {
        let details = await ApiProvider.getTitleDetails(result.id);
        movies.push(`${details.title} (${details.year})`);
    }

    render({ on: renderOn, html: template(movies) });
};
