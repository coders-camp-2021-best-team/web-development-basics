import { render } from '../../shared/dom';
import { MovieTile } from './MovieTile';
import LoadingState from '../../utils/loadingState';
import ErrorState from '../../utils/errorState';

export const TilesGrid = async ({ renderOn, movies }) => {
    LoadingState.setNewState(true);
    ErrorState.setNewState(false);
    const template = `
        <div class='grid-container'>
            ${(
                await Promise.all(
                    movies.map((movie) => MovieTile({ movieID: movie.id }))
                )
                    .then((results) => {
                        console.log('3');
                        LoadingState.setNewState(false);
                        return results;
                    })
                    .catch(() => {
                        console.log('3');
                        LoadingState.setNewState(false);
                        ErrorState.setNewState(true);
                    })
            ).join(' ')}
        </div>
    `;

    render({ html: template, on: renderOn });
};
