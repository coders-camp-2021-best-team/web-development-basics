import { render } from '../shared/dom.js';
import { TilesGrid } from '../components';
import ApiProvider from '../providers/ApiProvider.js';
import ConsoleLogger from '../utils/ConsoleLogger.js';

const template = `
<div id="search-screen">
    <template id="tiles-grid"></template>
</div>
`;

export const SearchScreen = async ({ renderOn }) => {
    render({ on: renderOn, html: template });

    const movies = (await ApiProvider.search('Fast & Furious')).results;

    ConsoleLogger.debug(movies);

    TilesGrid({ renderOn: '#tiles-grid', movies });
};
