import { render } from '../../shared/dom';

const template=`
    <div id="header">
      <img src="/static/img/logo.png" alt="logo">
      <div class="menu">
        <ul>
          <li>Movie</li>
          <li>TV Series</li>
          <li>Search</li>
          <li>Favorite</li>
          <li id="radnomBTN">Tu byndzie guzik</li>
        </ul>
      </div>
    </div>
`;

export const Header = ({ renderOn, options}) => {
    render({on: renderOn, html: template});
}