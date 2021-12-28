import { Label } from '../components/Label/Label';
import { TilesGrid } from '../components/Tiles/TilesGrid';
import { render } from '../shared/dom';
import ApiProvider from '../providers/ApiProvider';

const template = (title) => {
    return `
    <div id="category-screen">
        ${Label({ title: `${title}` })}
        <template id="category-grid"></template>
    </div>
`;
};

export const Category = async ({ renderOn }) => {
    const params = new URLSearchParams(window.location.search);
    const searchType = params.get('id');
    let title;
    let assets;
    switch (searchType) {
        case 'topMovies':
            title = 'Top 250 Movies';
            assets = await ApiProvider.getTop250Movies();
            break;
        case 'series':
            title = 'Series';
            assets = await ApiProvider.mostPopularTVs();
            break;
        case 'movies':
            title = 'Movies';
            assets = await ApiProvider.mostPopularMovies();
            break;
        default:
            break;
    }
    render({
        on: renderOn,
        html: template(title)
    });
    TilesGrid({renderOn:'#category-grid', movies: assets.items})
};
