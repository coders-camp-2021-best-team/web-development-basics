import StorageManager from '../services/StorageManager';

export const addtofavorites = (id) => {
    const favorites = StorageManager.getItem('favorites') || [];
    favorites.push(id);
    StorageManager.addItem('favorites', favorites);
};

export const removefromfavorites = (id) => {
    const favorites = StorageManager.getItem('favorites') || [];
    const index = favorites.indexOf(id);
    if (index > -1) {
        favorites.splice(index, 1);
    }
    StorageManager.addItem('favorites', favorites);
};
