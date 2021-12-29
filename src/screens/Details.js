import { AssetDetailsDescription } from '../components/AssetDetails/Description.js';
import { render } from '../shared/dom.js';
import ApiProvider from '../providers/ApiProvider';
import './Details.scss';

const template = (trailer) => `
<div id="details-screen" class="details">
    <div class="details__trailer">${trailer}</div>
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

    let trailer = '';
    if (movie.trailer && movie.trailer.linkEmbed) {
        trailer = `<iframe class="iframe" src="${movie.trailer.linkEmbed}"></iframe>`;
    }

    render({ on: renderOn, html: template(trailer) });

    AssetDetailsDescription({ renderOn: '.details__description', movie });
};
