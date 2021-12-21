import { render } from '../../shared/dom';

/**
 * @param {object} movie
 * @param {string} name
 * @param {string} index
 * @returns {string}
 */
const DescriptionRow = (movie, name, index) => {
    if (!index) {
        index = name.toLowerCase();
    }

    return `
        <div class="details__prop">
            <div class="details__prop--name">${name}:</div>
            <div class="details__prop--value">${movie[index]}</div>
        </div>
    `;
};

export const AssetDetailsDescription = ({ renderOn, movie }) => {
    const template = `
        <article class='asset-description'>
            <div class="details__container">
                ${DescriptionRow(movie, 'Title', 'fullTitle')}
                ${DescriptionRow(movie, 'Genres')}
                ${DescriptionRow(movie, 'Length', 'runtimeStr')}
                ${DescriptionRow(movie, 'IMDB Rating', 'imDbRating')}
                ${DescriptionRow(movie, 'IMDB Votes', 'imDbRatingVotes')}
                ${DescriptionRow(
                    movie,
                    'Metacritic Rating',
                    'metacriticRating'
                )}
                ${DescriptionRow(movie, 'Plot')}
                ${DescriptionRow(movie, 'Languages')}
                ${DescriptionRow(movie, 'Directors')}
                ${DescriptionRow(movie, 'Writers')}
            </div>
        </article>
    `;

    render({ html: template, on: renderOn });
};
