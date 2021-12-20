import { render } from '../../shared/dom';
import { redirect } from '../..';
import { routes } from '../../route';

//TODO: connect li elements with redirect function

const template = `
    <header>
      <img src="/static/img/logo.png" alt="logo" class="logo">
      <div class="navBar">
        <ul id="menu" class="menu">
          <li>Movie</li>
          <li>TV Series</li>
          <li>Search</li>
          <li id="favorites">Favorite</li>
          <button id="exit" class="exit"><li>&times;</li></button>
        </ul>
        <div class="btns">
          <button id="icon" class="icon"><img src="/static/img/menuIcon.png" alt="toggleMenuIconMinor"></button>
          <div id="randomBtn">Tu byndzie guzik</div>
        </div>
      </div>
    </header>
`;

export const Header = ({ renderOn }) => {
    render({ on: renderOn, html: template });

    const open = () => {
        document.getElementById('menu').classList.add('menu-active');
        document.getElementById('menu').classList.remove('menu');
    };

    const close = () => {
        document.getElementById('menu').classList.add('menu');
        document.getElementById('menu').classList.remove('menu-active');
    };

    document.getElementById('icon').onclick = open;
    document.getElementById('exit').onclick = close;

    document.getElementById('favorites').addEventListener('click', () => {
        redirect(routes.favorites.routerPath);
    });
};
