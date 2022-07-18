import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
console.log(gallery);
const galleryMarkup = createGallery(galleryItems);
console.log(galleryMarkup);
gallery.insertAdjacentHTML('beforeend', galleryMarkup)

function createGallery(items) {
    return items.map(({original, preview, description}) => {
       return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    }).join('')
}
var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, enableKeyboard: true, docClose:true, loop:true});
