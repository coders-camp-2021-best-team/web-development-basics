import { render } from '../../shared/dom';
import { redirect } from '../../';
import { routes } from '../../route';

export const SearchForm = ({ renderOn, initSearch }) => {
    const template = `
        <form class="search-form" id="search-form">
            <input id="search-keywords" type="text" placeholder="Search Keywords" value="${initSearch}" />
        </form>
    `;

    render({ on: renderOn, html: template });

    let form = document.getElementById('search-form');
    let keywords = document.getElementById('search-keywords');

    form.onsubmit = () => {
        redirect(routes.search.getPathWithParams(keywords.value || ''));
    };
};
