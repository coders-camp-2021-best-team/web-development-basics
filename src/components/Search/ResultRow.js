import { render } from '../../shared/dom';

const template = (result, idx) => `
    <tr>
        <td>${idx + 1}.</td>
        <td>
            <img src="${result.image}" />
        </td>
        <td>${result.title}</td>
        <td>${result.description}</td>
    </tr>
`;

export const ResultRow = ({ renderOn, result, idx }) => {
    render({ html: template(result, idx), on: renderOn });
};
