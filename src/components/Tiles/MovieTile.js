import { render } from '../../shared/dom';

const template = (title, image) => `
    <div class="movie-tile">
        <img src="${image}"/>
        <h3 class='title'>${title}</h3>
    </div>
`;

export const MovieTile = ({ renderOn, movie }) => {
    console.log(movie);
    const component = template(movie.title, movie.image);
    render({ on: renderOn, html: component });
};
