import { render } from '../shared/dom.js';
import { Star, AssetDetailsDescription } from '../components/index.js';
import ApiProvider from '../providers/ApiProvider';

const template = `
    <div id="home-screen">
        This is home screen
        <template id="desc"></template>
    </div>
`;

export const HomeScreen = ({ renderOn, options }) => {
    render({ on: renderOn, html: template });

    ApiProvider.search('Fast & Furious').then(async ({ results }) => {
        const more_details = await ApiProvider.getTitleDetails(results[0].id);

        AssetDetailsDescription({
            renderOn: '#desc',
            movie: more_details
        });
    });
};
