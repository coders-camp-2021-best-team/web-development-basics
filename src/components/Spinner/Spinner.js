import { render } from '../../shared/dom';

const template = `
<div id="spinner-screen" class="spinner-on">
  <div class="spinner"></div>
</div>
`;

export const Spinner = ({ renderOn }) => {
    render({ html: template, on: renderOn });
};
