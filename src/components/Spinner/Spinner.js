import { render } from '../../shared/dom';

const template = `
<div id="spinner-screen" class="spinner-off">
  <div class="spinner"></div>
</div>
`;

export const Spinner = ({ renderOn, loading }) => {
    render({ html: template, on: renderOn });
    const spinner = document.getElementById('spinner-screen');
    if (loading) {
        spinner.className = 'spinner-on';
    } else {
        spinner.className = 'spinner-off';
    }
};
