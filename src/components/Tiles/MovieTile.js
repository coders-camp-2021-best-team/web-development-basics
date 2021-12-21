import { Star } from '../Star/Star';
import { ImageComponent } from '../ImageComponent/ImageComponent';
import ApiProvider from '../../providers/ApiProvider';
import { observerListener } from '../../shared/observer';

export const MovieTile = async ({ movieID }) => {
    const movie = await ApiProvider.getTitleDetails(movieID);

    observerListener(`movie-tile-${movie.id}`, () => {
        window.location.href = `/details?id=${movie.id}`;
    });

    return `
    <div id="movie-tile-${movie.id}" class="movie-tile">
        <div class="img-hover">
            ${Star({ options: { id: `${movie.id}` } })}
            ${ImageComponent(`${movie.image}`, 'img-tile', `${movie.id}`)}
            <div class="movie-details">
                <p><strong>Year:</strong> ${movie.year}</p>
                <p><strong>Starring:</strong> ${movie.stars}</p>
                <p><strong>Plot:</strong> ${movie.plot}</p>
            </div>
        </div>
        <h3 class="title">${movie.title}</h3>
    </div>
`;
};
