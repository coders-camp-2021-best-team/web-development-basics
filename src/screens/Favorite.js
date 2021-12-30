import { Label } from '../components/Label/Label';
import StorageManager from '../services/StorageManager';
import { TilesGrid } from '../components/Tiles/TilesGrid';
import { render } from '../shared/dom';
import { NoFavorite } from '../components/NoFavorite/NoFavorite';

const template = `
    <div>
        ${Label({ title: 'favorite' })}
        <template id="no-favorite"></template>
        <template id="grid-template"></template>
    </div>
`;

export const FavoriteScreen = ({ renderOn }) => {
    render({ html: template, on: renderOn });
    const favorites = StorageManager.getItem('favorites') || [];
    if (favorites.length) {
        const favoritesToObj = favorites.map((movie) => ({
            id: movie
        }));
        TilesGrid({ renderOn: '#grid-template', movies: favoritesToObj });
    } else {
        NoFavorite({ renderOn: '#no-favorite' });
    }
};
