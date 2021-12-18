export const ImageCoponent= ({options { imageUrl, className, id, callback }}) => {
  return `
    <img src="${imageUrl}" class="${className}" id="${id}" onClick=${callback}/>
  `
};