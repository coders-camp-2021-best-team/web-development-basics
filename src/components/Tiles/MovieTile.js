import { Star } from '../Star/Star';
import { ImageComponent } from '../ImageComponent/ImageComponent';
import ApiProvider from '../../providers/ApiProvider';
import { observerListener } from '../../shared/observer';
import { routes } from '../../route/routes';
import { redirect } from '../..';

export const MovieTile = async ({ movieID }) => {
    const movie = await ApiProvider.getTitleDetails(movieID);

    observerListener(`movie-tile-${movie.id}`, () => {
        const path = routes.details.getPathWithParams(movie.id);
        redirect(path);
    });

    return `
    <div class="movie-tile">
        ${Star({ options: { id: `${movie.id}` } })}
            <div  id="movie-tile-${movie.id}" class="img-hover">
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
