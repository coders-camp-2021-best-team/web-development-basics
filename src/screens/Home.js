import { render } from '../shared/dom.js';
<<<<<<< HEAD
=======
import { MovieTile } from '../components';
import ApiProvider from '../providers/ApiProvider.js';
>>>>>>> main
import { Star } from '../components/index.js';

const template = `
    <div>
        <div id="home-screen">This is home screen</div>
        <template id="home-movie-tiles"></template>
    </div>
`;

export const HomeScreen = async ({ renderOn, options }) => {
    render({on: renderOn, html: template});

    // TODO this is temporary to show example movie tile
    const movies = await ApiProvider.search('Fast & Furious');

    const my_movie = movies.results[1];
    const movie = await ApiProvider.getTitleDetails(my_movie.id);
    const movie_tile = MovieTile({movie: movie});

    render({on: "#home-movie-tiles", html: movie_tile});
}