import { ImageComponent } from '../ImageComponent/ImageComponent';

//TODO Temporary image callback function
const getImageOnClickCallback = (id) => {
    return () => {
        console.log(id);
    }
}
//END

const GalleryCollection = (images) => {
    let html = '';

    for (var i = 0; i < images.length; i++) {
        html += `<div class="gallery-img-tile">${ImageComponent(
            images[i].image,
            'gallery-img',
            'gallery-img-' + i,
            getImageOnClickCallback(i)
        )}</div>`;
    }
    return html;
};

export const Gallery = (movie, title) => {
    // const movie = await ApiProvider.getTitleDetails(movieID);

    return `
    <div class="img-gallery">
        ${GalleryCollection(movie.images.items)}
    </div>
`;
};
