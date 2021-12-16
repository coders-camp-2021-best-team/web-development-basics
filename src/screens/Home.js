import { render } from '../shared/dom.js';
import { MovieCarousel } from '../components';
import ApiProvider from '../providers/ApiProvider.js';
import { MovieTile } from '../components';
import { Star } from '../components/index.js';

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
    const movie = await ApiProvider.getTitleDetails(my_movie.id);
    const movie_tile = MovieTile({movie: movie});

    render({on: "#home-movie-tiles", html: movie_tile});
}
