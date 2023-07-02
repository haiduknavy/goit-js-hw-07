import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');


const markup = galleryItems.map(({preview, original, description}) =>{
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`
}).join(' ');

gallery.insertAdjacentHTML("afterbegin", markup);

gallery.addEventListener('click', onClick);

function onClick (e){
    let lightbox = new SimpleLightbox('.gallery a', {captionsData:"alt",captionDelay:250})
    
    lightbox.open()

};

