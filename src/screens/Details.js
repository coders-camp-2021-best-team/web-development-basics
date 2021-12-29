import { AssetDetailsDescription } from '../components/AssetDetails/Description.js';
import { render } from '../shared/dom.js';
import ApiProvider from '../providers/ApiProvider';
import  { TrailerMovie }  from '../components/Trailer/trailer.js';

const template = (trailer) => `
<div id="details-screen" class="details">
    <template class="details__trailer">${trailer}</template>
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

    const trailer = '';
    if (movie.Trailer && movie.Trailer.ThumbnailUrl) {
        trailer = TrailerMovie(movie.Trailer.ThumbnailUrl);
    }

    render({ on: renderOn, html: template(trailer) });

    AssetDetailsDescription({ renderOn: '.details__description', movie });
};
