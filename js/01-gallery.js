import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const cardGallery = createsGalleryPictures(galleryItems);

gallery.insertAdjacentHTML("beforeend", cardGallery);

gallery.addEventListener("click", onGalleryClick);

function createsGalleryPictures(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
         </a>
      </li>`;
    })
    .join("");
}

function onGalleryClick(evt) {
  console.log(evt);
  evt.preventDefault();
  if (!evt.target.dataset.source) {
    return;
  }

  const originalImg = evt.target.dataset.source;
  const description = evt.target.alt;

  const instance = basicLightbox.create(`
      <img src="${originalImg}" alt="${description}">
  `);

  instance.show();
}
