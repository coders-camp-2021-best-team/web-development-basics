import { AssetDetailsDescription } from '../components/AssetDetails/Description.js';
import { render } from '../shared/dom.js';
import ApiProvider from '../providers/ApiProvider';
import { Gallery } from '../components/Gallery/Gallery.js';
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
    window.state.change(true);
    const params = new URLSearchParams(window.location.search);
    const searchID = params.get('id');
    const movie = await ApiProvider.getTitleDetails(searchID).then(
        (results) => {
            window.state.change(false);
            return results;
        }
    );

    let trailer = '';
    if (movie.trailer && movie.trailer.linkEmbed) {
        trailer = `<iframe class="video" src="${movie.trailer.linkEmbed}"></iframe>`;
    }

    render({ on: renderOn, html: template(trailer) });

    AssetDetailsDescription({ renderOn: '.details__description', movie });

    render({ on: '.details__gallery', html: Gallery(movie, 'GALLERY') });
};
