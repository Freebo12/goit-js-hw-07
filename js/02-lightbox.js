import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const boxGallery = document.querySelector(".gallery");
const markUpImage = createGalleryMarUp(galleryItems);

boxGallery.insertAdjacentHTML("beforeend", markUpImage);

function createGalleryMarUp(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"  />
</a>`;
    })
    .join("");
}
let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
gallery.on("show.simplelightbox", function () {});
