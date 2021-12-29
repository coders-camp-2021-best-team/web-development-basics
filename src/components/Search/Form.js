import { render } from '../../shared/dom';
import { redirect } from '../../';
import { routes } from '../../route';
import ConsoleLogger from '../../utils/ConsoleLogger';

const IDLE_TIMEOUT_LIMIT_MS = 800;
const IDLE_TIMEOUT_CHECK_MS = 50;

export const SearchForm = ({ renderOn, searchInputValue }) => {
    const template = `
        <div class="search-form" id="search-form">
            <input
                type="text"
                id="search-keywords"
                placeholder="WYSZUKAJ"
                value="${searchInputValue}"
                autocomplete="off"
            >

            <button>
                <svg width="77" height="50" viewBox="0 0 77 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 0H76.5V8.33333H0.5V0ZM0.5 20.8333H76.5V29.1667H0.5V20.8333ZM0.5 41.6667H76.5V50H0.5V41.6667Z" fill="white"/>
                </svg>

                FILTRY
            </button>
        </div>
    `;

    render({ on: renderOn, html: template });

    let timeout = 0;
    const form = document.getElementById('search-form');
    const keywords = document.getElementById('search-keywords');

    // set cursor behind last character in input field
    const index = keywords.value.length;
    keywords.focus();
    keywords.setSelectionRange(index, index);

    // detect if user is idle and fetch the results if they are
    window.timer = setInterval(() => {
        if (timeout > IDLE_TIMEOUT_LIMIT_MS) {
            if ((keywords.value.trim() || '') != searchInputValue) {
                ConsoleLogger.debug('Exceeded the timeout! Input has changed!');
                form.onsubmit();
            } else {
                timeout = 0;
            }
        } else {
            timeout += IDLE_TIMEOUT_CHECK_MS;
        }
    }, IDLE_TIMEOUT_CHECK_MS);

    // reset the timer when user changes the input field contents
    keywords.oninput = () => {
        timeout = 0;
    };

    form.onsubmit = () => {
        redirect(routes.search.getPathWithParams(keywords.value.trim() || ''));
    };
};
