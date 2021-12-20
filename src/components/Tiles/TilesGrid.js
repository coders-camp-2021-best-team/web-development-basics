import ApiProvider from '../../providers/ApiProvider';
import { render } from '../../shared/dom';
import { MovieTile } from './MovieTile';

export const TilesGrid = ({ renderOn, movies }) => {
    const template = `
        <div class='tiles-grid-container'>
            ${movies
                .map((movie, idx) => {
                    // const movie_details = await ApiProvider.getTitleDetails(
                    //     movie.id
                    // );
                    return `
                        <div id='tiles-grid-item-${idx}'>
                            ${MovieTile({ movie })}
                        </div>
                    `;
                })
                .join(' ')}
        </div>
    `;

    render({ html: template, on: renderOn });
};
