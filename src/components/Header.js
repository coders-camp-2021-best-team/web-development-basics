import { render } from '../shared/dom';

const template = `
    <div>
        I am a Header!
    </div>
`;

export const Header = ({ renderOn }) => {
    render({ html: template, on: renderOn });
}