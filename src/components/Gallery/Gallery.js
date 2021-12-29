import { Button } from '../Button/Button';
import { ImageComponent } from '../ImageComponent/ImageComponent';

//TODO Temporary image callback function
const getImageOnClickCallback = (id) => {
    return () => {
        console.log(id);
    };
};
//END

const GalleryCollection = (images) => {
    let html = '';

    for (var i = 0; i < images.length; i++) {
        html += `<div class="gallery-img-tile">${ImageComponent(
            images[i].image,
            'gallery-img',
            'gallery-img-' + i,
            getImageOnClickCallback(i),
            images[i].title
        )}</div>`;
    }
    return html;
};

export const Gallery = (movie, title) => {
    return `
    <div class="gallery">
        <div class="button">
            ${Button({ text: title, type: 'button', className: 'btn-gallery' })}
        </div>
        <div class="img-gallery">
            ${GalleryCollection(movie.images.items)}
        </div>
    </div>
`;
};
