import { render } from '../shared/dom';
import ApiProvider from '../providers/ApiProvider';

const template = `
    <div>Hello world!</div>
`;

export const App = ({ renderOn }) => {
    render({ on: renderOn, html: template });

    ApiProvider.search('Fast & Furious')
        .then((v) => {
            console.debug(v);

            v.results.forEach(async (result) => {
                await ApiProvider.getTitleDetails(result.id);
            });
        })
        .catch(console.error);
};
