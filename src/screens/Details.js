import { render } from "../shared/dom.js";
const template = `
<div id = "details-screen">
    <template></template>
    <template></template>
    <template></template>
    <template></template>
</div>
`;

export const DetailsScreen = ({ renderOn }) => {
	render({ on: renderOn, html: template });
};
