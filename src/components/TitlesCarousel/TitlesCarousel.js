import { obseverDom } from '../../shared/observer';
import { MovieTile } from '../Tiles/MovieTile';
import { Button } from '../Button/Button';
import { redirect } from '../../index';
import { routes } from '../../route';
import LoadingState from '../../utils/loadingState';
import ErrorState from '../../utils/errorState';

export const MovieCarousel = async ({ movies, id, btnName, route }) => {
    if (!movies.length) {
        return '';
    }
    ErrorState.setNewState(false);
    LoadingState.setNewState(true);
    obseverDom((_, obs) => {
        const carousel = document.getElementById(`carousel-${id}`);
        const content = document.getElementById(`carousel_content-${id}`);
        const next = document.getElementById(`carousel_next-${id}`);
        const prev = document.getElementById(`carousel_prev-${id}`);
        if (carousel && content && next && prev) {
            const gap = 16;
            next.addEventListener('click', (e) => {
                carousel.scrollBy(width + gap, 0);
                if (carousel.scrollWidth !== 0) {
                    prev.style.display = 'flex';
                }
                if (
                    content.scrollWidth - width - gap <=
                    carousel.scrollLeft + width
                ) {
                    next.style.display = 'none';
                }
            });
            prev.addEventListener('click', (e) => {
                carousel.scrollBy(-(width + gap), 0);
                if (carousel.scrollLeft - width - gap <= 0) {
                    prev.style.display = 'none';
                }
                if (
                    !content.scrollWidth - width - gap <=
                    carousel.scrollLeft + width
                ) {
                    next.style.display = 'flex';
                }
            });
            if(content.scrollWidth <= window.innerWidth){
                next.style.display = 'none';
            };

            let width = carousel.offsetWidth;
            window.addEventListener(
                'resize',
                (e) => (width = carousel.offsetWidth)
            );
            obs.disconnect();
            return;
        }
    });

    return `
    ${Button({
        onClick: () => redirect(routes.category.getPathWithParams(route)),
        id: `${id}`,
        text: btnName
    })}
<div class="wrapper">

    
  <div id="carousel-${id}" class="carousel">

    <div id="carousel_content-${id}" class="carousel__content">
        ${(
            await Promise.all(
                movies.map(
                    async (movie) => await MovieTile({ movieID: movie.id })
                )
            )
                .then((results) => {
                    LoadingState.setNewState(false);
                    return results;
                })
                .catch(() => {
                    LoadingState.setNewState(false);
                    ErrorState.setNewState(true);
                })
        ).join(' ')}
    </div>

    <div id="carousel_prev-${id}" class="carousel__prev">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
        viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" />
      </svg>
    </div>

    <div id="carousel_next-${id}" class="carousel__next" >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
        viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" />
      </svg>
    </div>
    </div>
</div>
`;
};
