import { render } from '../shared/dom';
import { Router } from '../pages';

const template = `
    <template id="app-router">
    </template>
`;

export const App = (renderOn: string) => {
    render(template, renderOn, false);
    Router({ renderOn: '#app-router' });
};
