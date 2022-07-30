import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBlock = document.querySelector(".gallery");
const makeListImg = galleryItems.map((item) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`;
});
galleryBlock.insertAdjacentHTML("afterbegin", makeListImg.join(" "));

// ---- Gallery basicLightbox ----//
galleryBlock.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.getAttribute("data-source")}">
`);
  instance.show(onEscClose);

  //   ---- cancel on ESC key ---//
  function onEscClose() {
    galleryBlock.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        instance.close();
      }
    });
  }
});
