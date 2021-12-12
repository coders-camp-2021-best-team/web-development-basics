import { render } from "../shared/dom.js";
const template = `
<div id ="details-screen" class="details">
    <template class="details__logo"></template>
    <template class="details__trailer"></template>
    <template class="details__gallery"></template>
    <template class="details__footer"></template>
</div>
`;

export const DetailsScreen = ({ renderOn }) => {
	render({ on: renderOn, html: template });
};
