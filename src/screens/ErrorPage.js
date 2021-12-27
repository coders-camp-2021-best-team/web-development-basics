import { Button } from "../components";
import { render } from "../shared/dom";

function onClickHandler() {
    this.$routes.push('Home');
}

const template = `
<div id="error-page">
    <div class="notfound">
        <div class="notfound-404">
            <h1>Oops!</h1>
        </div>
        <h2>Page not found</h2>
        <h3>404</h3>
        <p>the page you are looking for 
        doesn’t exist or an other error occurred.<br>	
        Go back, or head over to home page 
        to choose a new direction </p>
        ${Button({onClick={onClickHandler}, id: 'error-btn', text: 'Back to homepage', className: 'btn'})}
        <a href="#">Back to Homepage</a>
    </div>
</div>
`;

export const Error404Screen = ({ renderOn }) => {
    render({ html: template, on: renderOn });
    };