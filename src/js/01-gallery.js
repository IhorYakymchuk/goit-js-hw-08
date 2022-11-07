// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery')
const markupGallery = createGallery(galleryItems);
galleryList.insertAdjacentHTML('beforeend', markupGallery);

// galleryList.addEventListener("click",onGalleryContainerClick)

function createGallery(items) {
    return items.map(({preview,original,description}) => {return `<div class ="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" 
        src="${preview}"
        data-source="${original}"
        alt="${description}"/>
        </a>
        </div>`}).join("");
}

let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: '250' });




// let instance;

// function onGalleryContainerClick(evt) {
//     evt.preventDefault();
//     if (evt.target.nodeName !== "IMG") {
//         return
//     };
//      instance = basicLightbox.create(
//          `<img src="${evt.target.dataset.source}"/>`, {
//      onShow: instance => {
//         document.addEventListener('keydown', onModalCloseToEscape);
//     },
//       onClose: instance => {
//         document.removeEventListener('keydown', onModalCloseToEscape);
//       }
//    }
//      );
//     instance.show();
// }

// function onModalCloseToEscape(evt) {
//     if (evt.code === "Escape") {
//         instance.close();
//     }
// }




// =========АЛЬТЕРНАТИВНИЙ 1й варіант==============


// galleryList.insertAdjacentHTML('beforeend', markup);
// const instance = basicLightbox.create(`<img src="" alt=""/>`,
//   {
//     onShow: (instance) => { console.log(`show`); document.addEventListener('keydown', keypress) },
//     onClose: (instance) => { console.log(`close`); document.removeEventListener('keydown', keypress) }
//   }
// );
// galleryList.addEventListener('click', e => {
//   e.preventDefault();
//   if (e.target.nodeName !== 'IMG') return;
//   instance.element().querySelector("img").alt = e.target.alt;
//   instance.element().querySelector("img").src = e.target.dataset.source;
//   instance.show();
// });
// function keypress(evt) {
//   if (evt.key === `Escape`) {
//     instance.close();
//   }
// }