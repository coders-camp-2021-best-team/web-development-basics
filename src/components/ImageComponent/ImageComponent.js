import { observerListener } from '../../shared/observer';

const template = (imageUrl, className, id) => {
  return `<img src=${imageUrl || '/static/img/no-picture-min.jpg'} class="${className}" id="${id}" />`;
};
export const ImageComponent = (imageUrl, className, id, callback) => {
    observerListener(id, callback);
    return template(imageUrl, className, id);
};
