import videojs from 'video.js';

const template = (videoUrl) => {
    return `
    <video
    id="MY_VIDEO_ID"
    class="video-js vjs-default-skin vjs-big-play-centered"
    controls
    preload="auto"
    width="100%"
    height="auto"
    poster="MY_VIDEO_POSTER.jpg"
    data-setup="{}">
    <source src="${videoUrl}" type="video/mp4">
    <source src="${videoUrl}" type="video/webm">
    </video>
`;
};

export const TrailerMovie = ( videoUrl ) => {

    return template(videoUrl);
};
