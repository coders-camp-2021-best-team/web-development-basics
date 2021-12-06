import { render } from '../shared/dom';

const template = `
    <navbar id="app-navbar">
        <h1>This is a navbar!</h1>
    </navbar>
`;

export const Navbar = ({ renderOn }) => {
    render({ html: template, on: renderOn });
};
