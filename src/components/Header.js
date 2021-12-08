import { render } from '../shared/dom';

const template = `
    <header>
        I am a Header!
    </header>
`;

export const Header = ({ renderOn }) => {
    render({ html: template, on: renderOn });
}