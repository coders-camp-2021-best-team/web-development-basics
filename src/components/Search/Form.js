import { render } from '../../shared/dom';
import ConsoleLogger from '../../utils/ConsoleLogger';
import { Button } from '..';

export const SearchForm = ({ renderOn }) => {
    const template = `
        <div class="search-form" id="search-form">
            <input
                type="text"
                id="search-keywords"
                placeholder="Search..."
                autocomplete="off"
            >

            ${Button({
                className: 'search-form-filters',
                text: `
                    <svg width="77" height="50" viewBox="0 0 77 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 0H76.5V8.33333H0.5V0ZM0.5 20.8333H76.5V29.1667H0.5V20.8333ZM0.5 41.6667H76.5V50H0.5V41.6667Z" fill="white"/>
                    </svg>

                    FILTERS
                `,
                onClick: () => {
                    ConsoleLogger.warn(
                        '/* TODO: feature/search-form-filters */'
                    );
                }
            })}
        </div>
    `;

    render({ on: renderOn, html: template });
};
