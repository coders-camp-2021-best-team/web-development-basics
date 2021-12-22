import { render } from '../shared/dom.js';
import ApiProvider from '../providers/ApiProvider.js';
import { Button, MovieCarousel } from '../components';
import './Home.scss';

const template = async (top250Movies, mostPopularTVs, mostPopularMovies) => `
    <div id="homeScreen" class="homeScreen">
        <template id="home-movie-tiles"></template>
        ${await MovieCarousel({
            movies: top250Movies,
            id: 'topMovies',
            btnName: 'Top 250 movies',
            route: '/category'
        })}
        ${await MovieCarousel({
            movies: mostPopularTVs,
            id: 'series',
            btnName: 'Series',
            route: '/category'
        })}
        ${await MovieCarousel({
            movies: mostPopularMovies,
            id: 'movies',
            btnName: 'Movies',
            route: '/category'
        })}
    </div>
`;

export const HomeScreen = async ({ renderOn, options }) => {
    // TODO this is temporary to show example movie tile
    const top250Movies = await ApiProvider.getTop250Movies();
    const mostPopularTVs = await ApiProvider.mostPopularTVs();
    const mostPopularMovies = await ApiProvider.mostPopularMovies();

    render({
        on: renderOn,
        html: await template(
            top250Movies.items.splice(0, 20),
            mostPopularTVs.items.splice(0, 20),
            mostPopularMovies.items.splice(0, 20)
        )
    });
};
