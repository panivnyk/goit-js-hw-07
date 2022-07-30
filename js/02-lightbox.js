import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBlock = document.querySelector(".gallery");

const makeListImg = galleryItems.map((item) => {
  return `
  <a class="gallery__item" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
      />
    </a>`;
});
galleryBlock.insertAdjacentHTML("afterbegin", makeListImg.join(" "));

// ---- Gallery SimpleLightbox ----//
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
