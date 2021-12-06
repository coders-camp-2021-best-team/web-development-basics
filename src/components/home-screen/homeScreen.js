import { render } from '../shared/dom.js';

const template = `
    <div id="home-screen">This is nav-bar</div>
`;

export const HomeScreen = ({ renderOn, options }) => {
    render({on: renderOn, html: template});
};
