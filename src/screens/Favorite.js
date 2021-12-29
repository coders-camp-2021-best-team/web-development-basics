import StorageManager from '../services/StorageManager';
import { TilesGrid } from '../components/Tiles/TilesGrid';
import { render } from '../shared/dom';

const template = `
    <div>
        <template id="grid-template"></template>
    </div>
`;

export const FavoriteScreen = ({ renderOn }) => {
    render({ html: template, on: renderOn });
    const favorites = StorageManager.getItem('favorites') || [];
    TilesGrid({ renderOn: '#grid-template', movies: favorites });
};
