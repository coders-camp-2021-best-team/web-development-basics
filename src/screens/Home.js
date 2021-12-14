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

    const movies = await ApiProvider.search('Fast & Furious');

    const my_movie = movies.results[1];
    const movie = await ApiProvider.getTitleDetails(my_movie.id);
    

    MovieTile({ renderOn: '#home-movie-tiles', movie: movie });
}