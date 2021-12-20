import { render } from '../../shared/dom';
import { NavLink } from '../Nav/Link';
import { routes } from '../../route';
import { Button } from '../Button/Button';

const template = `
    <header>
      <a href="${routes.home.routerPath}">
        <img src="/static/img/logo.png" alt="logo" class="logo">
      </a>
      <div class="navBar">
        <ul id="menu" class="menu">
          ${NavLink({ href: '#', title: 'Movie' })}
          ${NavLink({ href: '#', title: 'TV Series' })}
          ${NavLink({ href: routes.search.routerPath, title: 'Search' })}
          ${NavLink({ href: routes.favorites.routerPath, title: 'Favorite' })}
          <button id="exit" class="exit"><li>&times;</li></button>
        </ul>
        <div class="btns">
          <button id="icon" class="icon"><img src="/static/img/menuIcon.png" alt="toggleMenuIconMinor"></button>
          ${Button(() => console.log("dupa"), "randomBtn", "random movies")}
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
};
