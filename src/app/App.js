import { render } from '../shared/dom';

const template = `
    <div>Hello world!</div>
`;

export const App = ({ renderOn, options }) => {
  render({ on: renderOn, html: template });
};
