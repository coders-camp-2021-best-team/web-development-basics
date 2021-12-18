import { render } from '../shared/dom.js';
import { MovieTile } from '../components';
import ApiProvider from '../providers/ApiProvider.js';
import { Star } from '../components/index.js';
import { MovieCarousel } from '../components';
import ApiProvider from '../providers/ApiProvider.js';

const template = (movies) => `
    <div>
        <div id="home-screen">This is home screen</div>
        <template id="home-movie-tiles"></template>
        ${MovieCarousel({ movies: movies.results, id: 'Carousel' })}
    </div>
`;

export const HomeScreen = async ({ renderOn, options }) => {

    // TODO this is temporary to show example movie tile
    const movies = await ApiProvider.search('Fast & Furious');

    const my_movie = movies.results[1];

    render({ on: renderOn, html: template(movies) });
};
