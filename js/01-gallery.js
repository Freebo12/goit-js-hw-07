import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);
const boxGallery = document.querySelector(".gallery");
const markUpImage = createGalleryMarUp(galleryItems);

boxGallery.insertAdjacentHTML("beforeend", markUpImage);
boxGallery.addEventListener("click", onBoxClick);

function createGalleryMarUp(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class ="gallery__item"><a class ="gallery__link" href ="${original}"><img  class = "gallery__image" src="${preview}" alt="${description}" data-source ="${original}"></a></div>`;
    })
    .join("");
}

function onBoxClick(evt) {
  evt.preventDefault();
  const imgSwatch = evt.target.classList.contains("gallery__image");
  if (!imgSwatch) {
    return;
  }
  //Open modal
  const instance = basicLightbox.create(`
      <img src ="${evt.target.dataset.source}">
  `);
  instance.show();
  //close Modal Esc
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      instance.close();
    }
  });
}
