import { render } from '../../shared/dom';
import { ResultRow } from '.';

/**
 * @param {Array} results
 */
const template = (results) => `
    <table class="search__results-table">
        <tr>
            <th>No.</th>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
        </tr>
        ${results
            .map((_, i) => `<template id="search__result-row${i}"></template>`)
            .join(' ')}
    </table>
`;

export const ResultsTable = ({ renderOn, results }) => {
    render({ html: template(results), on: renderOn });

    for (let i = 0; i < results.length; i++) {
        const result = results[i];
        ResultRow({ renderOn: `#search__result-row${i}`, result, idx: i });
    }
};
