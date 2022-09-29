import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
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

let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
