import { render } from '../shared/dom';

const template = `
    <div>
        I am a Footer!
    </div>
`;

export const Footer = ({ renderOn }) => {
    render({ html: template, on: renderOn });
}