import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

// console.log(galleryItems);

const markup = galleryItems.map(({preview, original, description}) =>{
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
}).join(' ');

gallery.insertAdjacentHTML("afterbegin", markup);

gallery.addEventListener('click', onClick);

function onClick (e){
    e.preventDefault();

    if(e.target.nodeName !== 'IMG'){
        return;
    };
 
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
    
`, {
    onShow: (instance) => window.addEventListener("keydown", onEsc),
    onClose: (instance) => window.removeEventListener
})
instance.show()

window.addEventListener("keydown", onEsc);

function onEsc (e){
    
    if (e.key === 'Escape'){
        instance.close()
    };
}
};

