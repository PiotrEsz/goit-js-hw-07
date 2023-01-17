import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector("div.gallery");

const items = galleryItems
  .map(
    (image) =>
      `<div class="gallery__item"> 
    <a class="gallery__link" href="${image.original}">
    <img class="gallery__image"
    src="${image.preview}"
    alt="${image.description}"
    />
    </a>
    </div>`
  )
  .join("");
console.log(galleryItems);

gallery.insertAdjacentHTML("afterbegin", items);

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

const largeImage = (e) => {
  lightbox.open(e);
  e.preventDefault();
};

gallery.addEventListener("click", largeImage);
