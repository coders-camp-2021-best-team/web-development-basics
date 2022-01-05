import { render } from '../../shared/dom';

export const SearchForm = ({ renderOn }) => {
    const template = `
        <div class="search-form" id="search-form">
            <input
                type="text"
                id="search-keywords"
                placeholder="Search..."
                autocomplete="off"
            >
        </div>
    `;

    render({ on: renderOn, html: template });
};
