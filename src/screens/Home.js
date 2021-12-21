import { render } from '../shared/dom.js';
import ApiProvider from '../providers/ApiProvider.js';
import { Button, MovieCarousel } from '../components';
import './Home.scss';
import { redirect } from '../index.js';

const template = async (top, movies, series) => `
    <div id="homeScreen" class="homeScreen">
        <template id="home-movie-tiles"></template>
        ${Button({
            onClick: () => redirect('/search'),
            id: 'topMovies',
            text: 'Top 250 movies'
        })}
        ${await MovieCarousel({
            movies: top.items.slice(0, 15),
            id: 'topMovies'
        })}
        ${Button({
            onClick: () => redirect('/search'),
            id: 'series',
            text: 'Series'
        })}
        ${await MovieCarousel({
            movies: series.results,
            id: 'series'
        })}
        ${Button({
            onClick: () => redirect('/search'),
            id: 'movies',
            text: 'Movies'
        })}
        ${await MovieCarousel({
            movies: movies.results,
            id: 'movies'
        })}
    </div>
`;

export const HomeScreen = async ({ renderOn, options }) => {
    // TODO this is temporary to show example movie tile
    const top = await ApiProvider.getTop250Movies();
    const movies = await ApiProvider.search('Inception');
    const series = await ApiProvider.search('Maze');
    render({ on: renderOn, html: await template(top, movies, series) });
};
