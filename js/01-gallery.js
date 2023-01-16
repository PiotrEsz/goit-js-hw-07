import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const gallery = document.querySelector("div.gallery");

const imgGalleryMarkup = galleryItems
  .map(
    (img) =>
      `<div class="gallery__item"> 
            <a class="gallery__link" href="${img.original}">
                <img class="gallery__image"
                src="${img.preview}"
                data-source="${img.original}"
                alt="${img.description}"
                />
            </a>
    </div>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", imgGalleryMarkup);

const largeImage = (e) => {
  const originalImg = e.target.dataset.source;
  basicLightbox
    .create(`<img  src="${originalImg}">	`, {
      onShow: (instance) => {
        document.addEventListener("keydown", (event) => {
          if (event.key === "Escape") {
            instance.close();
          }
        });
      },
    })
    .show();
  e.preventDefault();
};

gallery.addEventListener("click", largeImage);
