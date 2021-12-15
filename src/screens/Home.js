import { render } from '../shared/dom.js';
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
    const movies = await ApiProvider.search('Inception');

    render({ on: renderOn, html: template(movies) });
};
