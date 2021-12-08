import { render } from '../shared/dom';

export const TileComponent = ({ title, image }) => {
    return `
    <div class="movie-tile">
        <img src="${image}"/>
        <p class='title'>${title}</p>
        
    </div>
    `
}

export const MovieTiles = ({ renderOn, movies }) => {

    console.debug(movies);

    const TileComponentCollection = `
    <div class="movie-tiles">
        
        ${movies.map(({ title, image }) =>(
            TileComponent({ title, image })
        )).join('')}
        
    </div>
    `;

    render({ on: renderOn, html:TileComponentCollection});

}