let contact = document.querySelector(".header .contact");
let navbar = document.querySelector(".header .navbar .nav");
let icons = document.querySelector(".header .icons");
let contactinfo = document.querySelector(".header .contact-info");

document.querySelector("#menu-btn").addEventListener("click",()=>{
  navbar.classList.toggle("active");
});

document.querySelector("#info-btn").addEventListener("click",()=>{
  contactinfo.classList.toggle("active");
});

document.querySelector("#close-contact-info").addEventListener("click",()=>{
  contactinfo.classList.remove("active");
})


window.addEventListener("scroll",()=>{
  navbar.classList.remove("active");
  contactinfo.classList.remove("active");

  console.log(scrollY);

  if(window.scrollY > 0.1){
    contact.style.display = "none";
  }else{
    contact.style.display = "flex";
  }
})




var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".news-card", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

