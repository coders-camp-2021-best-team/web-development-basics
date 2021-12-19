import { Star } from "../Star/Star";

export const MovieTile = ({ movie }) => {
    return `
    <div class="movie-tile">
        <div class="img-hover">
            <img src="${movie.image}" class="img-tile"/>
            <div class="movie-details">
                <p><strong>Year:</strong> ${movie.year}</p>
                <p><strong>Starring:</strong> ${movie.stars}</p>
                <p><strong>Plot:</strong> ${movie.plot}</p>
            </div>
            ${Star({options : {id: `${movie.id}`}})}
        </div>
        <h3 class="title">${movie.title}</h3>
    </div>
`;
};
