import { render } from '../../shared/dom';
import { MovieTiles } from '../TileComponents';
import ApiProvider from '../../providers/ApiProvider';

export const MovieCarousel = ({ renderOn, movies }) => {
    const template = `
    <div class="wrapper">

    <div id="carousel" class="carousel">
    
      <div id="carousel_content" class="carousel__content">
          ${movies.map((_,idx) => (`
            <div class="carousel__item">${idx}</div>
          `)).join(' ')}
      </div>
      
      <div id="carousel_prev" class="carousel__prev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0V0z" />
          <path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" />
        </svg>
      </div>
      <div id="carousel_next" class="carousel__next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0V0z" />
          <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" />
        </svg>
      </div>
    </div>
  `;

  render({ on: renderOn, html: template });

  const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("carousel_content"),
  next = document.getElementById("carousel_next"),
  prev = document.getElementById("carousel_prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));
}