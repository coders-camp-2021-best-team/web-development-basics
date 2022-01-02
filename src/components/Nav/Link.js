export const NavLink = ({ href, title }) => {
    return `<li class="navbar-link"><a class="${isActive(
        href
    )}" href="${href}">${title}</a></li>`;
};

const isActive = (href) => {
    const activeUrl = window.location.pathname + window.location.search;
    return activeUrl === href ? 'active' : '';
};
