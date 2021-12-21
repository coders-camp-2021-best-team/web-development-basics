import StorageManager from '../services/StorageManager';
import { render } from '../shared/dom';

const template = `
    <div></div>
`;

export const FavoriteScreen = ({ renderOn }) => {
    render({ html: template, on: renderOn });
    const favorites = StorageManager.getItem('favorites') || [];
};
