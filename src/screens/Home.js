import { render } from '../shared/dom.js';
import { MovieTile } from '../components';
import ApiProvider from '../providers/ApiProvider.js';

const template = `
    <div>
        <div id="home-screen">This is home screen</div>
        <template id="home-movie-tiles"></template>
    </div>
`;

export const HomeScreen = async ({ renderOn, options }) => {
    render({on: renderOn, html: template});

    const movies = await ApiProvider.search('Inception');

    MovieTile({ renderOn: '#home-movie-tiles', movie: movies.results[3] });
};
