import { render } from '../shared/dom.js';
import { TilesGrid } from '../components';
import ApiProvider from '../providers/ApiProvider.js';
import { SearchForm } from '../components/Search/Form.js';

const template = `
    <div id="search-screen">
        <template id="search-form"></template>
        <template id="tiles-grid"></template>
    </div>
`;

export const SearchScreen = async ({ renderOn }) => {
    render({ on: renderOn, html: template });

    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get('q') || '';

    SearchForm({ renderOn: '#search-form', searchInputValue: searchQuery });
    if (searchQuery) {
        const movies = (await ApiProvider.search(searchQuery)).results;

        TilesGrid({ renderOn: '#tiles-grid', movies });
    } else {
        render({
            on: '#tiles-grid',
            html: `<h2 class="warn">Search something...</h2>`
        });
    }
};
