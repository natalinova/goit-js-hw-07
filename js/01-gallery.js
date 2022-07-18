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
       return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    }).join('')
}
gallery.addEventListener('click', onItemGalleryClick);
function onItemGalleryClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains("gallery__image")) {
        return
    }
        const instance = basicLightbox.create(`<img src=${evt.target.dataset.source}>`
        )
        instance.show()

        window.addEventListener('keydown', closeModal)
        function closeModal(evt) {
            if (evt.code === 'Escape') { instance.close() }
        }
    }

