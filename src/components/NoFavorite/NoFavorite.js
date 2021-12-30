import { render } from '../../shared/dom';

export const NoFavorite = ({ renderOn }) => {
    const template = `
      <div class='no-favorite'>
        No favorites found
      </div>
  `;
    render({ html: template, on: renderOn });
};
