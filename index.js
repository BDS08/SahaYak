$(window).scroll(function () {
  //====== scroll-up button show/hide script ======
  if (this.scrollY > 80) {
    $('.scroll-up-btn').addClass("show");
  } else {
    $('.scroll-up-btn').removeClass("show");
  }
});

$('.scroll-up-btn').click(function () {
  $('html').animate({ scrollTop: 0 });
   //====== removing smooth scroll on slide-up button click ======
  $('html').css("scrollBehavior", "auto");
});

//====== Mobile Menu ======
let nav = document.querySelector("nav");
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let logoOne = document.querySelector(".logo");


menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
}

cancelBtn.onclick = function () {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
}

//====== Side Navigation Bar Close  ======
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
  })
}


//====== Scroll Fixed ======
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    logoOne.classList.add("active");
    menuBtn.classList.add("active");
  } else {
    nav.classList.remove("sticky");
    logoOne.classList.remove("active");
    menuBtn.classList.remove("active");
  }
  
  
  //====== counter on scroll ======
  var number = 0;
  var oTop = $('#counter').offset().top - window.innerHeight;
    if (number == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },

                {

                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }
   });
});
    

 //====== Reviews Section ======
const reviews = [
  {
    id: 1,
    name: "Susmita kumari",
    year: "First year",
    img:
      "Images/reviews3.png",
    text:
      "Lorem Ipsum is simply dummy text the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: 2,
    name: "Ankit kumar",
    year: "Second year",
    img:
      "Images/reviews2.png",
    text:
      "Lorem Ipsum help me alot, text the when an unknown printer took a galley find me right product in good prize make a type specimen book."
  },
  {
    id: 3,
    name: "Priya kumari",
    year: "Second year",
    img:
      "Images/reviews4.png",
    text:
      "Lorem Ipsum is simply dummy text the 1500s, due to printer took osm website which help me to find product in very less prize specimen book.."
  },
  {
    id: 4,
    name: "Anmol kumar",
    year: "First year",
    img:
      "Images/reviews1.png",
    text:
      "Real Lorem Ipsum is simply text the 1500s, it will help me to find the galley of type and scrambled it to make a type specimen book. "
  }
];

const img = document.getElementById("person-img");
const name1 = document.getElementById("name");
const year = document.getElementById("year");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", () => {
  const item = reviews[currentItem];
  img.src = item.img;
  name1.textContent = item.name;
  year.textContent = item.year;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  name1.textContent = item.name;
  year.textContent = item.year;
  info.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// show prev person
prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});



