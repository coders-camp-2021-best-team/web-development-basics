import { render } from '../shared/dom.js';
import { MovieTiles, MovieCarousel } from '../components';
import ApiProvider from '../providers/ApiProvider.js';

const template = `
    <div>
        <div id="home-screen">This is home screen</div>
        <template id="home-movie-tiles"></template>
        <template id="home-movie-tiles-2"></template>
    </div>
`;

export const HomeScreen = async ({ renderOn, options }) => {
    render({on: renderOn, html: template});

    const movies = await ApiProvider.search('Inception');

    MovieCarousel({ renderOn: '#home-movie-tiles', movies: movies.results, id:'Carousel' });

    MovieCarousel({ renderOn: '#home-movie-tiles-2', movies: movies.results, id:'Carousel-2' });
};