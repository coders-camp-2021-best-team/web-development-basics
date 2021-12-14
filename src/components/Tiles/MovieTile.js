import { render } from '../../shared/dom';

export const MovieTile = ({ renderOn, movie }) => {
    const component = `
    <div id="es" class="movie-tile">
        <div class="img-hover">
            <img src="${movie.image}" class="img-tile"/>
            <div class="movie-details">
                <p><strong>Year:</strong> ${movie.year}</p>
                <p><strong>Starring:</strong> ${movie.stars}</p>
                <p><strong>Plot:</strong> ${movie.plot}</p>
            </div>
            
        </div>
        <h3 class="title">${movie.title}</h3>
    </div>
`
    render({ on: renderOn, html: component });
};
