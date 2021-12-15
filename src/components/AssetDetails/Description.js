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
        <tr>
            <th>${name}</th>
            <td>${movie[index]}</td>
        </tr>
    `;
};

export const AssetDetailsDescription = ({ renderOn, movie }) => {
    console.debug(movie);

    const template = `
        <article class='asset-description'>
            <table>
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
            </table>
        </article>
    `;

    render({ html: template, on: renderOn });
};
