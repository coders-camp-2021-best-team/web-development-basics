import { render } from '../shared/dom.js';
import ApiProvider from '../providers/ApiProvider.js';
import { Button, MovieCarousel } from '../components';
import './Home.scss';
import { redirect } from '../index.js';

const template = async (movies, lol, dupa) => `
    <div id="homeScreen" class="homeScreen">
        <template id="home-movie-tiles"></template>
        ${Button({
            onClick: () => redirect('/search'),
            id: 'topMovies',
            text: 'Top 250 movies'
        })}
        ${await MovieCarousel({
            movies: movies.items.slice(0, 15),
            id: 'topMovies'
        })}
        ${Button({
            onClick: () => redirect('/search'),
            id: 'series',
            text: 'Series'
        })}
        ${await MovieCarousel({
            movies: lol.results.slice(0, 15),
            id: 'series'
        })}
        ${Button({
            onClick: () => redirect('/search'),
            id: 'movies',
            text: 'Movies'
        })}
        ${await MovieCarousel({
            movies: dupa.results.slice(0, 15),
            id: 'movies'
        })}
    </div>
`;

export const HomeScreen = async ({ renderOn, options }) => {
    // TODO this is temporary to show example movie tile
    const movies = await ApiProvider.getTop250Movies();
    const lol = await ApiProvider.mostPopularTVs('Incepction');
    const dupa = await ApiProvider.mostPopular('Maze');
    console.log(movies);
    console.log(lol);
    console.log(dupa);
    render({ on: renderOn, html: await template(movies, lol, dupa) });
};
