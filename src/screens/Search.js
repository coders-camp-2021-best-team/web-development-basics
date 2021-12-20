import { render } from '../shared/dom.js';

const template = `
<div id="search-screen">
    <template id="tiles-grid"></template>
</div>
`;

export const SearchScreen = async ({ renderOn }) => {
    render({ on: renderOn, html: template });
};
