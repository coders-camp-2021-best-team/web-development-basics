import { render } from '../shared/dom.js';
import ApiProvider from '../providers/ApiProvider.js';
import { MovieCarousel } from '../components';
import ConsoleLogger from '../utils/ConsoleLogger.js';

const template = async (movies) => `
    <div>
        <div id="home-screen">This is home screen</div>
        <template id="home-movie-tiles"></template>
        ${await MovieCarousel({ movies: movies[0], id: 'Carousel0' })}
        ${await MovieCarousel({ movies: movies[1], id: 'Carousel1' })}
        ${await MovieCarousel({ movies: movies[2], id: 'Carousel2' })}
        ${await MovieCarousel({ movies: movies[3], id: 'Carousel3' })}
    </div>
`;

export const HomeScreen = async ({ renderOn, options }) => {
    // TODO this is temporary to show example movie tile
    const movies = await ApiProvider.search('Fast & Furious');
    const comingSoon = await ApiProvider.comingSoon();
    const mostPopularTVs = await ApiProvider.mostPopularTVs();
    const mostPopularMovies = await ApiProvider.mostPopularMovies();

    render({
        on: renderOn,
        html: await template([
            movies.results.splice(0, 20),
            comingSoon.items.splice(0, 20),
            mostPopularTVs.items.splice(0, 20),
            mostPopularMovies.items.splice(0, 20)
        ])
    });
};
