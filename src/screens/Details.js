import { AssetDetailsDescription } from '../components/AssetDetails/Description.js';
import { render } from '../shared/dom.js';
import ApiProvider from '../providers/ApiProvider';
import { getQueryParams } from '../utils/GetQueryParams.js';

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
    const { id: searchID } = getQueryParams();
    const movie = await ApiProvider.getTitleDetails(searchID);

    render({ on: renderOn, html: template });

    AssetDetailsDescription({ renderOn: '.details__description', movie });
};
