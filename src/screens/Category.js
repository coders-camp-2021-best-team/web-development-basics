import { Label } from '../components/Label/Label';
import { TilesGrid } from '../components/Tiles/TilesGrid';
import { render } from '../shared/dom';
import ApiProvider from '../providers/ApiProvider';

const template = (title, movies) => {
    return `
  ${Label({ title: `${title}` })}
  ${TilesGrid({ renderOn: '#tilesGrid', movies: movies })}
  <div id="tilesGrid></div>
`;
};

export const Category = async ({ renderOn }) => {
    const params = new URLSearchParams(window.location.search);
    const searchType = params.get('id');
    switch (searchType) {
        case 'topMovies':
            const topMovies = await ApiProvider.getTop250Movies();
            render({
                on: renderOn,
                html: template('Top 250 Movies', topMovies)
            });
            break;
        case 'series':
            const series = await ApiProvider.mostPopularTVs();
            render({ on: renderOn, html: template('Series', series) });
            break;
        case 'movies':
            const movies = await ApiProvider.mostPopularMovies();
            render({ on: renderOn, html: template('Movies', movies) });
            break;
        default:
            break;
    }
};
