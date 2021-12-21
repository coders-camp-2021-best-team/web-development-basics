import { observerListener } from '../../shared/observer';

const template = (imageUrl, className, id) => {
  let src = true;
  if (src) {
    return <img src="${imageUrl}" class="${className}" id="${id}"/>
  } else {
    return <img src="/static/img/nopicture-min.jpg">
  };
};
export const ImageComponent = (imageUrl, className, id, callback) => {
    observerListener(id, callback);
    return template(imageUrl, className, id);
};
