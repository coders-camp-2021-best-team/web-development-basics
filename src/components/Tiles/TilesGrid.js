import { render } from '../../shared/dom';
import { MovieTile } from './MovieTile';

export const TilesGrid = async ({ renderOn, movies }) => {
    globalThis.state.set(true);
    const template = `
        <div class='grid-container'>
            ${(
                await Promise.all(
                    movies.map((movie) => MovieTile({ movieID: movie.id }))
                ).then((results) => {
                    globalThis.state.set(false);
                    return results;
                })
            ).join(' ')}
        </div>
    `;

    render({ html: template, on: renderOn });
};
