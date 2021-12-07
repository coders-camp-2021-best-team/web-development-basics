import { ResultsTable } from '../components/Search/ResultsTable';
import { render } from '../shared/dom';
import ApiProvider from '../providers/ApiProvider';

const template = `
    <div id="app__screen__search">
        <template id="search__results-table"></template>
    </div>
`;

export const SearchScreen = async ({ renderOn }) => {
    render({ html: template, on: renderOn });

    const params = new URLSearchParams(window.location.search);
    const query = params.get('q');

    const { results } = await ApiProvider.search(query);

    ResultsTable({
        renderOn: '#search__results-table',
        results
    });
};
