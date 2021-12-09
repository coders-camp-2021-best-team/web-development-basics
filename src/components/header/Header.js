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
          <button onclick="${close.bind()}" id="exit"><li>&times;</li></button>
        </ul>
        <div class="btns">
          <button onclick="${open.bind()}" id="icon"><img src="/static/img/menuIcon.png" alt="menu"></button>
          <div id="randomBtn">Tu byndzie guzik</div>
        </div>
      </div>
    </div>
`;

export const Header = ({ renderOn, options}) => {
  
  const open = () => {
      document.getElementById("menu").classList.add("menu-activate");
      document.getElementById("menu").classList.remove("menu");
    }
    
  const btn = document.getElementById("icon").onclick=open;

  
  const close = () => {
      document.getElementById("menu").classList.add("menu");
      document.getElementById("menu").classList.remove("menu-active");
    }

  render({on: renderOn, html: template(close, open)});
    
    
}
