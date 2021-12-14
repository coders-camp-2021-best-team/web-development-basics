import { render } from '../../shared/dom';

const template= (id) =>{
  return(
  `
    <img src="${2 !== null ? '/static/img/starOn.png' : '/static/img/starOff.png'}" id="star" class="${document.getElementById("star").src === '/static/img/starOn.png' ? 'checked' : 'unchecked'}"/>
  `
)
};

export const Star = ({ renderOn, options: {id}}) => {
  render({on: renderOn, html: template(id)});
};