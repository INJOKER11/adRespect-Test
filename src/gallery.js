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

const wrapper = document.getElementById("gallery-wrapper");
const toggle = document.getElementById("gallery-toggle");
const overlay = document.getElementById("gallery-overlay");
const icon = document.getElementById("gallery-toggle-icon");

const COLLAPSED_HEIGHT = {
  sm: "420px",
  md: "620px",
  lg: "900px",
  xl: "1475px",
};

function getCollapsedHeight() {
  if (window.innerWidth >= 1280) return COLLAPSED_HEIGHT.xl;
  if (window.innerWidth >= 1024) return COLLAPSED_HEIGHT.lg;
  if (window.innerWidth >= 768) return COLLAPSED_HEIGHT.md;
  return COLLAPSED_HEIGHT.sm;
}

let expanded = false;

toggle.addEventListener("click", () => {
  expanded = !expanded;

  if (expanded) {
    wrapper.style.maxHeight = `${wrapper.scrollHeight}px`;

    overlay.classList.add("opacity-0", "pointer-events-none");
    overlay.classList.remove("opacity-100");

    icon.classList.add("rotate-180");
    toggle.firstChild.textContent = "Zwiń";
  } else {
    wrapper.style.maxHeight = getCollapsedHeight();

    overlay.classList.remove("opacity-0", "pointer-events-none");
    overlay.classList.add("opacity-100");

    icon.classList.remove("rotate-180");
    toggle.firstChild.textContent = "Rozwiń";

    wrapper.style.maxHeight = getCollapsedHeight();

    setTimeout(() => {
      wrapper.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 300);
  }
});

window.addEventListener("load", () => {
  wrapper.style.maxHeight = getCollapsedHeight();
});

window.addEventListener("resize", () => {
  if (!expanded) {
    wrapper.style.maxHeight = getCollapsedHeight();
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
