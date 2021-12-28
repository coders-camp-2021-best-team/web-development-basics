
export const TrailerMovie = ( videoUrl ) => {
    const template =  `
        <video
        id="my-video"
        class="video-js vjs-default-skin vjs-big-play-centered"
        controls
        preload="auto"
        width="640"
        height="268"
        poster="MY_VIDEO_POSTER.jpg"
        data-setup="{}">
        <source src="${videoUrl}" type="video/mp4">
        <source src="${videoUrl}" type="video/webm">
        </video>
    `;
};
