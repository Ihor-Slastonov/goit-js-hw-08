import SimpleLightbox from "simplelightbox";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(SimpleLightbox);
console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const renderImages = galleryItems
    .map(
        ({ original, preview, description }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`,
    )
    .join('');

galleryRef.innerHTML = '';
galleryRef.insertAdjacentHTML('beforeend', renderImages);

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });