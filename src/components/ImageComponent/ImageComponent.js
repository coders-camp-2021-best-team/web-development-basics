import { observerListener } from '../../shared/observer';

const template = (imageUrl, className, id, title) => {
    return `<img src = "${imageUrl}"
    onerror="this.onerror=null;this.src='https://imdb-api.com/images/original/nopicture.jpg';" class="${className}" id="${id}" title="${title}"/>`;
};

export const ImageComponent = (
    imageUrl,
    className,
    id,
    callback,
    title = ''
) => {
    observerListener(id, callback);

    return template(imageUrl, className, id, title);
};
