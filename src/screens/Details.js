import { AssetDetailsDescription } from '../components/AssetDetails/Description.js';
import { render } from '../shared/dom.js';
import ApiProvider from '../providers/ApiProvider';
import { Gallery } from '../components/Gallery/Gallery.js';
import './Details.scss';
import LoadingState from '../utils/loadingState.js';
import ErrorState from '../utils/errorState.js';

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
    LoadingState.setNewState(true);
    ErrorState.setNewState(false);
    const params = new URLSearchParams(window.location.search);
    const searchID = params.get('id');
    const movie = await ApiProvider.getTitleDetails(searchID)
        .then((results) => {
            console.log('2');
            LoadingState.setNewState(false);
            return results;
        })
        .catch(() => {
            console.log('2');
            LoadingState.setNewState(false);
            ErrorState.setNewState(true);
        });

    let trailer = '';
    if (movie.trailer && movie.trailer.linkEmbed) {
        trailer = `<iframe class="video" src="${movie.trailer.linkEmbed}"></iframe>`;
    }

    render({ on: renderOn, html: template(trailer) });

    AssetDetailsDescription({ renderOn: '.details__description', movie });

    render({ on: '.details__gallery', html: Gallery(movie, 'GALLERY') });
};
