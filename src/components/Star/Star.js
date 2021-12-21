import { obseverDom } from '../../shared/observer';
import StorageManager from '../../services/StorageManager';
import {
    addtofavorites,
    removefromfavorites
} from '../../utils/manageFavorites';

const starOn = '/static/img/starOn.png';
const starOff = '/static/img/starOff.png';

const template = (id) => {
    return `
    <img src="" id="${id}" class="star" alt="star"/>
  `;
};

export const Star = ({ options: { id } }) => {
    obseverDom((_, obs) => {
        const img = document.getElementById(`${id}`);
        if (img) {
            const favorites = StorageManager.getItem(`favorites`) || [];
            img.src = favorites.find((el) => el === `${id}`) ? starOn : starOff;
            img.addEventListener('click', () => {
                if (img.src.includes(starOn)) {
                    removefromfavorites(`${id}`);
                    img.src = starOff;
                } else {
                    addtofavorites(`${id}`);
                    img.src = starOn;
                }
            });
            obs.disconnect();
            return;
        }
    });

    return template(id);
};
