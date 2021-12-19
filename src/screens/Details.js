import { render } from "../shared/dom.js";
const template = `
<div id ="details-screen" class="details">
    <template class="details__trailer"></template>
    <template class="details__poster"></template>
    <template class="details__gallery-button"></template>
    <template class="details__gallery"></template>
</div>
`;

export const DetailsScreen = ({ renderOn }) => {
	render({ on: renderOn, html: template });
};
