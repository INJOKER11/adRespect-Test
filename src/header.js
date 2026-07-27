const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

let isOpen = false;

searchButton.addEventListener("click", () => {
  isOpen = !isOpen;

  if (isOpen) {
    searchInput.hidden = false;
    searchInput.focus();
    searchInput.classList.remove("w-0", "opacity-0");
    searchInput.classList.add("w-48", "opacity-100");
    searchInput.focus();
  } else {
    searchInput.hidden = true;
    searchInput.value = "";
    searchInput.classList.remove("w-48", "opacity-100");
    searchInput.classList.add("w-0", "opacity-0");
    searchInput.value = "";
  }
});

searchInput.addEventListener("blur", () => {
  if (!searchInput.value) {
    isOpen = false;
    searchInput.classList.remove("w-48", "opacity-100");
    searchInput.classList.add("w-0", "opacity-0");
  }
});

// burger menu mobile
const menu = document.getElementById("mobileMenu");
const openBtn = document.getElementById("menuButton");
const closeBtn = document.getElementById("closeMenu");

openBtn.addEventListener("click", () => {
  menu.classList.remove("translate-x-full");
});

closeBtn.addEventListener("click", () => {
  menu.classList.add("translate-x-full");
});

// accordeon oferta
const ofertaBtn = document.getElementById("mobileOfertaBtn");
const ofertaMenu = document.getElementById("mobileOfertaMenu");
const ofertaArrow = document.getElementById("mobileOfertaArrow");

ofertaBtn.addEventListener("click", () => {
  const isOpen = ofertaMenu.style.maxHeight;

  if (isOpen) {
    ofertaMenu.style.maxHeight = null;
    ofertaArrow.classList.remove("rotate-180");
  } else {
    ofertaMenu.style.maxHeight = `${ofertaMenu.scrollHeight}px`;
    ofertaArrow.classList.add("rotate-180");
  }
});
