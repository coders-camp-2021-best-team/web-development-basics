import { AssetDetailsDescription } from '../components/AssetDetails/Description.js';
import { render } from '../shared/dom.js';
import ApiProvider from '../providers/ApiProvider';

const template = `
<div id="details-screen" class="details">
    <template class="details__trailer"></template>
    <template class="details__poster"></template>
    <template class="details__description"></template>
    <template class="details__gallery-button"></template>
    <template class="details__gallery"></template>
</div>
`;

export const DetailsScreen = async ({ renderOn }) => {
    state.set(true);
    const params = new URLSearchParams(window.location.search);
    const searchID = params.get('id');
    const movie = await ApiProvider.getTitleDetails(searchID).then(
        (results) => {
            state.set(false);
            return results;
        }
    );

    render({ on: renderOn, html: template });

    AssetDetailsDescription({ renderOn: '.details__description', movie });
};
