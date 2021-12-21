import { render } from '../shared/dom.js';
import ApiProvider from '../providers/ApiProvider.js';
import { Button, MovieCarousel } from '../components';
import './Home.scss';
import { redirect } from '../index.js';

const template = async (movies) => `
    <div id="homeScreen" class="homeScreen">
        <template id="home-movie-tiles"></template>
        ${Button({
            onClick: () => redirect('/search'),
            id: 'topMovies',
            text: 'Top 250 movies'
        })}
        ${await MovieCarousel({
            movies: movies[0],
            id: 'topMovies'
        })}
        ${Button({
            onClick: () => redirect('/search'),
            id: 'series',
            text: 'Series'
        })}
        ${await MovieCarousel({
            movies: movies[1],
            id: 'series'
        })}
        ${Button({
            onClick: () => redirect('/search'),
            id: 'movies',
            text: 'Movies'
        })}
        ${await MovieCarousel({
            movies: movies[2],
            id: 'movies'
        })}
    </div>
`;

export const HomeScreen = async ({ renderOn, options }) => {
    // TODO this is temporary to show example movie tile
    const top = await ApiProvider.getTop250Movies();
    const mostPopularTVs = await ApiProvider.mostPopularTVs();
    const mostPopularMovies = await ApiProvider.mostPopularMovies();

    render({
        on: renderOn,
        html: await template([
            top.items.splice(0, 20),
            mostPopularTVs.items.splice(0, 20),
            mostPopularMovies.items.splice(0, 20)
        ])
    });
};
