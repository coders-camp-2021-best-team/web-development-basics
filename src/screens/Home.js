import { render } from '../shared/dom.js';
import ApiProvider from '../providers/ApiProvider.js';
import { MovieCarousel } from '../components';
import './Home.scss';

const template = async (
    top250Movies,
    mostPopularTVs,
    mostPopularMovies,
    commingSoon
) => `
    <div id="homeScreen" class="homeScreen">
        <template id="home-movie-tiles"></template>
        ${await MovieCarousel({
            movies: top250Movies,
            id: 'topMovies',
            btnName: 'Top 250 movies',
            route: 'topMovies'
        })}
        ${await MovieCarousel({
            movies: mostPopularTVs,
            id: 'series',
            btnName: 'Series',
            route: 'series'
        })}
        ${await MovieCarousel({
            movies: mostPopularMovies,
            id: 'movies',
            btnName: 'Movies',
            route: 'movies'
        })}
        ${await MovieCarousel({
            movies: commingSoon,
            id: 'commingSoon',
            btnName: 'Comming Soon',
            route: 'commingSoon'
        })}
    </div>
`;

export const HomeScreen = async ({ renderOn, options }) => {
    // TODO this is temporary to show example movie tile
    const top250Movies = await ApiProvider.getTop250Movies();
    const mostPopularTVs = await ApiProvider.mostPopularTVs();
    const mostPopularMovies = await ApiProvider.mostPopularMovies();
    const commingSoon = await ApiProvider.comingSoon();

    render({
        on: renderOn,
        html: await template(
            top250Movies.items.splice(0, 20),
            mostPopularTVs.items.splice(0, 20),
            mostPopularMovies.items.splice(0, 20),
            commingSoon.items.splice(0, 20)
        )
    });
};
