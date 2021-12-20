import { render } from '../shared/dom.js';
import { TilesGrid } from '../components';
import ApiProvider from '../providers/ApiProvider.js';

const template = `
<div id="search-screen">
    <template id="tiles-grid"></template>
</div>
`;

export const SearchScreen = async ({ renderOn }) => {
    render({ on: renderOn, html: template });

    const movies = (await ApiProvider.search('Fast & Furious')).results;

    TilesGrid({ renderOn: '#tiles-grid', movies });
};
