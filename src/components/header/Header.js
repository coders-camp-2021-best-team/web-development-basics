import { render } from '../../shared/dom';
import { NavLink } from '../Nav/Link';
import { routes } from '../../route';
import { Button } from '../Button/Button';
import ApiProvider from '../../providers/ApiProvider';
import { redirect } from '../..';

const template = (randomMovie) => {
    return `
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
        ${Button({
            onClick: () => {
                redirect(routes.details.getPathWithParams(randomMovie.id));
            },
            id: 'randomBtn',
            text: 'random movies',
            type: 'button',
            className: 'randomBtn'
        })}
      </div>
    </div>
  </header>
`;
};

export const Header = async ({ renderOn }) => {
    const randomMovie = await ApiProvider.getRandomAsset();
    render({ on: renderOn, html: template(randomMovie) });

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
