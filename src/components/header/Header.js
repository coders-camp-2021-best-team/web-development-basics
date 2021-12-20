import { render } from '../../shared/dom';
import { NavLink } from '../Nav/Link';

//TODO: connect li elements with redirect function

const template = `
    <header>
      <a href="/">
        <img src="/static/img/logo.png" alt="logo" class="logo">
      </a>
      <div class="navBar">
        <ul id="menu" class="menu">
          ${NavLink({ href: '#', title: 'Movie' })}
          ${NavLink({ href: '#', title: 'TV Series' })}
          ${NavLink({ href: '/search', title: 'Search' })}
          ${NavLink({ href: '#', title: 'Favorite' })}
          <button id="exit" class="exit"><li>&times;</li></button>
        </ul>
        <div class="btns">
          <button id="icon" class="icon"><img src="/static/img/menuIcon.png" alt="toggleMenuIconMinor"></button>
          <div id="randomBtn">Tu byndzie guzik</div>
        </div>
      </div>
    </header>
`;

export const Header = ({ renderOn, options }) => {
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
};
