import { render } from '../../shared/dom';

const template = `
<div id="error" class="error-off">An error occured</div>
`;
export const Error = ({ renderOn, errorMsg }) => {
    render({ on: renderOn, html: template });
};
