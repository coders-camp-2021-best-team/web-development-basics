import { render } from '../shared/dom.js';
import { Star } from '../components/index.js';
import ApiProvider from '../providers/ApiProvider';
import Logger from '../utils/ConsoleLogger';

const template = `
    <div id="home-screen">This is home screen</div>
`;

export const HomeScreen = ({ renderOn, options }) => {
    render({ on: renderOn, html: template });
};
