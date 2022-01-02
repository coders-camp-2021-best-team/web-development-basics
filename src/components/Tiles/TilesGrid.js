import { render } from '../../shared/dom';
import { MovieTile } from './MovieTile';
import loadingState from '../../utils/loadingState';

export const TilesGrid = async ({ renderOn, movies }) => {
    loadingState.setNewState(true);
    const template = `
        <div class='grid-container'>
            ${(
                await Promise.all(
                    movies.map((movie) => MovieTile({ movieID: movie.id }))
                ).then((results) => {
                    loadingState.setNewState(false);
                    return results;
                })
            ).join(' ')}
        </div>
    `;

    render({ html: template, on: renderOn });
};
