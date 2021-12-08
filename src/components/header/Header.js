import { render } from '../../shared/dom';

const template=`
    <div id="header">
      <img scr="logo.png" alt="logo">
      <div class="menu">
        <ul>
          <li>Movie</li>
          <li>TV Series</li>
          <li>Search</li>
          <li>Favorite</li>
          <li id="radnomBTN">tu byndize guzik</li>
        </ul>
      </div>
    </div>
`;

export const Header = ({ renderOn, options}) => {
    render({on: renderOn, html: template});
}