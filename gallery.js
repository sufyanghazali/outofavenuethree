window.addEventListener("DOMContentLoaded", () => {
  const carouselOverlay = document.querySelector(".carousel__overlay");
  const activeImage = document.querySelector(".active-image");
  const workItems = document.querySelectorAll(".work-item__header");
  const galleryImages = document.querySelectorAll(".gallery__image");
  const backButton = document.querySelector(".carousel__button--back");
  const nextButton = document.querySelector(".carousel__button--next");
  const body = document.querySelector("body");

  let activeGallery;
  let activeGalleryImages;
  let activeImageIndex;

  carouselOverlay.addEventListener("click", () => {
    if (carouselOverlay.classList.contains("is-open")) {
      carouselOverlay.classList.remove("is-open");
      body.classList.remove("noscroll");
      img = activeImage.querySelector("img");
      activeImage.removeChild(img);
    }
  });

  workItems.forEach((item) => {
    item.addEventListener("click", () => {
      carouselOverlay.classList.add("is-open");
      console.log("work item clicked");
    });
  });

  galleryImages.forEach((image) => {
    image.addEventListener("click", (e) => {
      e.stopPropagation();
      carouselOverlay.classList.add("is-open");
      body.classList.add("noscroll");

      activeGallery = image.parentNode.parentNode;

      const img = document.createElement("img");
      img.src = image.src;
      activeImage.appendChild(img);

      activeGalleryImages = activeGallery.querySelectorAll(".gallery__image");
      activeImageIndex = Array.from(activeGalleryImages).findIndex(
        (img) => img.src === image.src
      );
    });
  });

  activeImage.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  nextButton.addEventListener("click", (e) => {
    e.stopPropagation();
    activeImageIndex++;
    if (activeImageIndex >= activeGalleryImages.length) activeImageIndex = 0;
    let img = document.querySelector(".active-image img");
    img.src = activeGalleryImages[activeImageIndex].src;
  });

  backButton.addEventListener("click", (e) => {
    e.stopPropagation();
    activeImageIndex--;
    if (activeImageIndex <= 0)
      activeImageIndex = activeGalleryImages.length - 1;
    let img = document.querySelector(".active-image img");
    img.src = activeGalleryImages[activeImageIndex].src;
  });
});
