import { render } from '../../shared/dom';
import { MovieTile } from './MovieTile';

export const TilesGrid = ({ renderOn, movies }) => {
    const template = `
        <div class='grid-container'>
            ${movies.map((movie) => MovieTile({ movie })).join(' ')}
        </div>
    `;

    render({ html: template, on: renderOn });
};
