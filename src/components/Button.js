import { render } from "../shared/dom";

const template = (text) => `
    <button class='btn>${text}</button>
`;

export const Button = ({renderOn, text}) => {
    render({html:template(text), on: renderOn});
}