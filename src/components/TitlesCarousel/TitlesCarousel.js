import { render } from '../../shared/dom';
import { MovieTiles } from '../TileComponents';
import ApiProvider from '../../providers/ApiProvider';

export const MovieCarousel = ({ renderOn, movies }) => {
    const template = `
    <div class="carousel" id="carousel">
        <div class="content" id="carousel_content">
            ${movies.map((_,idx) => (`
              <template id="carousel-movie-${idx}"></template>
            `)).join(' ')}
        </div>
        <button class="prev" id="carousel_prev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path fill="none" d="M0 0h24v24H0V0z" />
          <path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" />
        </svg>
      </button>
      <button class="next" id="carousel_next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path fill="none" d="M0 0h24v24H0V0z" />
          <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" />
        </svg>
      </button>
    </div>
  `;
  movies.foreach(async (movie, idx) => {
    const movie_more_details = await ApiProvider.getTitleDetails(movie.id);
    MovieTiles({ renderOn: `#carousel-movie-${idx}`, movie: movie_more_details });
  });
  render({ on: renderOn, html: template });

  const gap = 16;

const carousel = document.getElementById("carousel"), //.querySelector("carousel"),
  content = document.getElementById("carousel_content"), //.querySelector("content"),
  next = document.getElementById("carousel_next"), //.querySelector("next"),
  prev = document.getElementById("carousel_prev"); //.querySelector("prev");

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