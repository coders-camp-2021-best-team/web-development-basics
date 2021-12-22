import { AssetDetailsDescription } from '../components/AssetDetails/Description.js';
import { render } from '../shared/dom.js';
import ApiProvider from '../providers/ApiProvider';
import { Gallery } from '../components/Gallery/Gallery.js';

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
    const params = new URLSearchParams(window.location.search);
    const searchID = params.get('id');
    const movie = await ApiProvider.getTitleDetails(searchID);

    render({ on: renderOn, html: template });

    AssetDetailsDescription({ renderOn: '.details__description', movie });

    render({ on : '.details__gallery', html: Gallery ( movie )});

    

    
};
