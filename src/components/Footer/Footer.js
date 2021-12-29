import { render } from '../../shared/dom';

const template = `
    <footer>
        Copyright © 2021 CodersCamp
    </footer>
`;

export const Footer = ({ renderOn }) => {
    render({ html: template, on: renderOn });
};
