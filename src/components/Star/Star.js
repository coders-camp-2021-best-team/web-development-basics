import { obseverDom } from '../../shared/observer';
import StorageManager from '../../services/StorageManager';

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
            img.src = StorageManager.getItem(`${id}`) ? starOn : starOff;
            img.addEventListener('click', () => {
                if (img.src.includes(starOn)) {
                    StorageManager.removeItem(`${id}`);
                    img.src = starOff;
                } else {
                    StorageManager.addItem(`${id}`, { id });
                    img.src = starOn;
                }
            });
            obs.disconnect();
            return;
        }
    });

    return template(id);
};
