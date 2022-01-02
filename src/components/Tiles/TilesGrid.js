import { render } from '../../shared/dom';
import { MovieTile } from './MovieTile';

export const TilesGrid = async ({ renderOn, movies }) => {
    window.state.change(true);
    const template = `
        <div class='grid-container'>
            ${(
                await Promise.all(
                    movies.map((movie) => MovieTile({ movieID: movie.id }))
                ).then((results) => {
                    window.state.change(false);
                    return results;
                })
            ).join(' ')}
        </div>
    `;

    render({ html: template, on: renderOn });
};
