import Macy from "macy";

const macy = Macy({
  container: "#projects-grid",
  columns: 3,
  margin: 42,
  breakAt: {
    1024: 2,
    768: 1,
  },
});

const wrapper = document.querySelector("#gallery-wrapper");
const overlay = document.querySelector("#gallery-overlay");
const button = document.querySelector("#gallery-toggle");
const icon = document.querySelector("#gallery-toggle-icon");

function getCollapsedHeight() {
  if (window.innerWidth >= 1280) return "1475px";
  if (window.innerWidth >= 1024) return "900px";
  if (window.innerWidth >= 768) return "620px";
  return "420px";
}

const POSITION_CLASSES = {
  collapsed: ["absolute", "bottom-11.25", "left-1/2", "-translate-x-1/2"],
  expanded: ["relative", "mx-auto", "mt-8"],
};

function setButtonPosition(isExpanded) {
  const add = isExpanded
    ? POSITION_CLASSES.expanded
    : POSITION_CLASSES.collapsed;
  const remove = isExpanded
    ? POSITION_CLASSES.collapsed
    : POSITION_CLASSES.expanded;

  button.classList.remove(...remove);
  button.classList.add(...add);
  icon.classList.toggle("rotate-180", isExpanded);
}

function expandGallery() {
  macy.recalculate(true);
  wrapper.style.maxHeight = `${wrapper.scrollHeight}px`;

  overlay.classList.add("hidden");
  setButtonPosition(true);
}

function collapseGallery() {
  wrapper.style.maxHeight = getCollapsedHeight();
  overlay.classList.remove("hidden");
  setButtonPosition(false);
}
let expanded = false;
button.addEventListener("click", () => {
  expanded = !expanded;
  if (expanded) {
    expandGallery();
  } else {
    collapseGallery();
  }
});

// gallery popup

const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector("#lightbox");
const lightboxImg = document.querySelector("#lightbox-img");
const closeBtn = document.querySelector("#lightbox-close");
const prevBtn = document.querySelector("#lightbox-prev");
const nextBtn = document.querySelector("#lightbox-next");

const imageSources = Array.from(galleryItems).map(
  (item) => item.querySelector("img").src,
);

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  lightboxImg.src = imageSources[currentIndex];
  lightbox.classList.remove("hidden");
  lightbox.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.add("hidden");
  lightbox.classList.remove("flex");
  document.body.style.overflow = "";
}

function showPrev() {
  currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
  lightboxImg.src = imageSources[currentIndex];
}

function showNext() {
  currentIndex = (currentIndex + 1) % imageSources.length;
  lightboxImg.src = imageSources[currentIndex];
}

galleryItems.forEach((item, index) => {
  item.addEventListener("click", () => openLightbox(index));
});

closeBtn.addEventListener("click", closeLightbox);
prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

// todo: add keyboard support
