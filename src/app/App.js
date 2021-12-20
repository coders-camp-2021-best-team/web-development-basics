import { render } from '../shared/dom';
import { BaseScreen } from '../screens';

const template = `
    <template id="app-basescreen"></template>
`;

export const App = ({ renderOn }) => {
    render({ html: template, on: renderOn }, false);

    BaseScreen({ renderOn: '#app-basescreen' });
};
