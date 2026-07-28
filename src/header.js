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

// oferta dropdown
const lgOfertaBtn = document.getElementById("lgOfertaBtn");
const ofertaDropdown = document.getElementById("ofertaDropdown");
const ofertaIcon = document.getElementById("ofertaIcon");

let dropDownIsOpen = false;

lgOfertaBtn.addEventListener("click", (e) => {
  e.stopPropagation();

  dropDownIsOpen = !dropDownIsOpen;

  if (dropDownIsOpen) {
    ofertaDropdown.classList.remove(
      "invisible",
      "opacity-0",
      "scale-95",
      "translate-y-2",
    );

    ofertaDropdown.classList.add(
      "visible",
      "opacity-100",
      "scale-100",
      "translate-y-0",
    );

    ofertaIcon.classList.add("rotate-180");
  } else {
    closeDropdown();
  }
});

function closeDropdown() {
  dropDownIsOpen = false;

  ofertaDropdown.classList.remove(
    "visible",
    "opacity-100",
    "scale-100",
    "translate-y-0",
  );

  ofertaDropdown.classList.add(
    "invisible",
    "opacity-0",
    "scale-95",
    "translate-y-2",
  );

  ofertaIcon.classList.remove("rotate-180");
}

document.addEventListener("click", closeDropdown);

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
