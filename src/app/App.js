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
    const { results } = await ApiProvider.search('Fast & Furious');
    console.debug(data);

    for (const title of results) {
        const details = await ApiProvider.getTitleDetails(title.id);
        movies.push(`${details.title} (${details.year})`);
    }

    render({ on: renderOn, html: template(movies) });
};
