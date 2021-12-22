import { observerListener } from '../../shared/observer';

const template = (imageUrl, className, id) => {
    return `<img src = "${imageUrl}"
    onerror="this.onerror=null;this.src='https://imdb-api.com/images/original/nopicture.jpg';" class="${className}" id="${id}" "/>`;
};

export const ImageComponent = (imageUrl, className, id, callback) => {
    observerListener(id, callback);

    return template(imageUrl, className, id);
};
