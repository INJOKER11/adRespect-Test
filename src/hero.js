import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";

const heroSwiper = new Swiper(".heroSwiper", {
  modules: [Navigation, Autoplay],

  loop: true,

  speed: 700,

  navigation: {
    nextEl: "#heroNext",
    prevEl: "#heroPrev",
  },
});
