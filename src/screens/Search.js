import { render } from '../shared/dom.js';
import { TilesGrid } from '../components';
import ApiProvider from '../providers/ApiProvider.js';
import { SearchForm } from '../components/Search/Form.js';
import ConsoleLogger from '../utils/ConsoleLogger.js';
import loadingState from '../utils/loadingState.js';

const IDLE_TIMEOUT_LIMIT_MS = 800;
const IDLE_TIMEOUT_CHECK_MS = 50;

const template = `
    <div id="search-screen">
        <template id="search-form"></template>
        <div id="tiles-grid"></div>
    </div>
`;

const empty_query = () => {
    render(
        {
            on: '#tiles-grid',
            html: `<h2 class="warn">Search results will appear here...</h2>`
        },
        false
    );
};

const not_found = () => {
    render(
        {
            on: '#tiles-grid',
            html: `<h2 class="warn">Not found!</h2>`
        },
        false
    );
};

export const SearchScreen = async ({ renderOn }) => {
    render({ on: renderOn, html: template });
    SearchForm({ renderOn: '#search-form' });

    loadingState.setNewState(false);

    let searchQuery = '';
    let timeout = 0;
    const keywords = document.getElementById('search-keywords');

    window.timer = setInterval(async () => {
        if (timeout > IDLE_TIMEOUT_LIMIT_MS) {
            if ((keywords.value.trim() || '') !== searchQuery) {
                searchQuery = keywords.value.trim();

                ConsoleLogger.debug('Exceeded the timeout! Input has changed!');

                if (!searchQuery) {
                    return empty_query();
                }

                try {
                    const movies = (await ApiProvider.search(searchQuery))
                        .results;
                    TilesGrid({ renderOn: '#tiles-grid', movies }, false);
                } catch {
                    not_found();
                }
            } else {
                timeout = 0;
            }
        } else {
            timeout += IDLE_TIMEOUT_CHECK_MS;
        }
    }, IDLE_TIMEOUT_CHECK_MS);

    keywords.oninput = () => {
        ConsoleLogger.debug('Received oninput event!');
        timeout = 0;
    };
};
