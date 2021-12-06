import { render } from '../shared/dom';

const template = `
    <footer id="app-footer">
        <h1>This is a navbar!</h1>
    </footer>
`;

export const Footer = ({ renderOn }) => {
    render({ html: template, on: renderOn });
};
