import { Label } from '../components/Label/Label';
import StorageManager from '../services/StorageManager';
import { TilesGrid } from '../components/Tiles/TilesGrid';
import { render } from '../shared/dom';
import { NoFavorite } from '../components/NoFavorite/NoFavorite';
import LoadingState from '../utils/loadingState';

const template = `
    <div id="favorite-screen">
        ${Label({ title: 'favorite' })}
        <template id="favorite-display"></template>
    </div>
`;

export const FavoriteScreen = ({ renderOn }) => {
    render({ html: template, on: renderOn });
    const favorites = StorageManager.getItem('favorites') || [];
    if (favorites.length) {
        const favoritesToObj = favorites.map((movie) => ({
            id: movie
        }));
        TilesGrid({ renderOn: '#favorite-display', movies: favoritesToObj });
    } else {
        LoadingState.setNewState(false);
        NoFavorite({ renderOn: '#favorite-display' });
    }
};
