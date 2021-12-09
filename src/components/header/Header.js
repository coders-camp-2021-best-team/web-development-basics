import { render } from '../../shared/dom';

const template= (close, open) =>`
    <div id="header">
      <img src="/static/img/logo.png" alt="logo" class="logo">
      <div class="navBar">
        <ul id="menu" class="menu">
          <li>Movie</li>
          <li>TV Series</li>
          <li>Search</li>
          <li>Favorite</li>
          <button id="exit"><li>&times;</li></button>
        </ul>
        <div class="btns">
          <button id="icon"><img src="/static/img/menuIcon.png" alt="menu"></button>
          <div id="randomBtn">Tu byndzie guzik</div>
        </div>
      </div>
    </div>
`;

export const Header = ({ renderOn, options}) => {
  render({on: renderOn, html: template(close, open)});
  
  const open = () => {
      document.getElementById("menu").classList.add("menu-active");
      document.getElementById("menu").classList.remove("menu");
    }
  
  const close = () => {
      document.getElementById("menu").classList.add("menu");
      document.getElementById("menu").classList.remove("menu-active");
    }

  document.getElementById('icon').onclick = open;
  document.getElementById('exit').onclick = close;
    
}
