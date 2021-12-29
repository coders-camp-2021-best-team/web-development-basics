import { render } from '../shared/dom.js';
import { TilesGrid } from '../components';
import ApiProvider from '../providers/ApiProvider.js';
import { SearchForm } from '../components/Search/Form.js';
import { getQueryParams } from '../utils/GetQueryParams';

const template = `
    <div id="search-screen">
        <template id="search-form"></template>
        <template id="tiles-grid"></template>
    </div>
`;

export const SearchScreen = async ({ renderOn }) => {
    render({ on: renderOn, html: template });

    const searchQuery = getQueryParams().q || '';

    SearchForm({ renderOn: '#search-form', searchInputValue: searchQuery });
    if (searchQuery) {
        try {
            const movies = (await ApiProvider.search(searchQuery)).results;

            TilesGrid({ renderOn: '#tiles-grid', movies });
        } catch {
            render({
                on: '#tiles-grid',
                html: `<h2 class="warn">Not found!</h2>`
            });
        }
    } else {
        render({
            on: '#tiles-grid',
            html: `<h2 class="warn">Search results will appear here...</h2>`
        });
    }
};
