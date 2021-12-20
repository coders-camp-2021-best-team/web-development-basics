import { render } from '../../shared/dom';
import { MovieTile } from './MovieTile';

export const TilesGrid = async ({ renderOn, movies }) => {
    const template = `
        <div class='grid-container'>
            ${(
                await Promise.all(
                    movies.map((movie) => MovieTile({ movieID: movie.id }))
                )
            ).join(' ')}
        </div>
    `;

    render({ html: template, on: renderOn });
};
