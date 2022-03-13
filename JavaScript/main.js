function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "navbar");

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("navbar");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 100,
  centeredSlides: true,
  grapcursor: true,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

// ///////////PRICING FUNCTION:

function price() {
  var distance = document.getElementById("distance").value;
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  var lenght = document.getElementById("lenght").value;
  var width = document.getElementById("width").value;
  var price;
  var pric;
  var size;
  var x = 0;

  size = parseFloat(width) * parseFloat(height) * parseFloat(lenght);

  //SHORT DISTANCE:

  if (distance <= 100) {
    if (size <= 50) {
      if (weight <= 1) {
        price = parseFloat(distance) * 7;
      } else if (weight > 1 && weight <= 5) {
        price = parseFloat(distance) * 9;
      } else if (weight > 5 && weight <= 10) {
        price = parseFloat(distance) * 11;
      } else if (weight > 10 && weight <= 30) {
        price = parseFloat(distance) * 15;
      } else if (weight > 30) {
        price = parseFloat(distance) * 17;
      }
    } else if (size > 50 && size <= 100) {
      if (weight <= 1) {
        price = parseFloat(distance) * 8;
      } else if (weight > 1 && weight <= 5) {
        price = parseFloat(distance) * 9;
      } else if (weight > 5 && weight <= 10) {
        price = parseFloat(distance) * 10;
      } else if (weight > 10 && weight <= 30) {
        price = parseFloat(distance) * 17;
      } else if (weight > 30) {
        price = parseFloat(distance) * 19;
      }
    } else if (size > 100 && size <= 200) {
      if (weight <= 1) {
        price = parseFloat(distance) * 9;
      } else if (weight > 1 && weight <= 5) {
        price = parseFloat(distance) * 10;
      } else if (weight > 5 && weight <= 10) {
        price = parseFloat(distance) * 11;
      } else if (weight > 10 && weight <= 30) {
        price = parseFloat(distance) * 18;
      } else if (weight > 30) {
        price = parseFloat(distance) * 20;
      }
    } else if (size > 200) {
      if (weight <= 1) {
        price = parseFloat(distance) * 10;
      } else if (weight > 1 && weight <= 5) {
        price = parseFloat(distance) * 11;
      } else if (weight > 5 && weight <= 10) {
        price = parseFloat(distance) * 13;
      } else if (weight > 10 && weight <= 30) {
        price = parseFloat(distance) * 20;
      } else if (weight > 30) {
        price = parseFloat(distance) * 22;
      }
    }
  }

  //MEDIUM DISTANCE:

  if (distance > 100 && distance <= 300) {
    if (size <= 50) {
      if (weight <= 1) {
        price = parseFloat(distance) * 6;
      } else if (weight > 1 && weight <= 5) {
        price = parseFloat(distance) * 7;
      } else if (weight > 5 && weight <= 10) {
        price = parseFloat(distance) * 8;
      } else if (weight > 10 && weight <= 30) {
        price = parseFloat(distance) * 10;
      } else if (weight > 30) {
        price = parseFloat(distance) * 12;
      }
    } else if (size > 50 && size <= 100) {
      if (weight <= 1) {
        price = parseFloat(distance) * 7;
      } else if (weight > 1 && weight <= 5) {
        price = parseFloat(distance) * 8;
      } else if (weight > 5 && weight <= 10) {
        price = parseFloat(distance) * 9;
      } else if (weight > 10 && weight <= 30) {
        price = parseFloat(distance) * 12;
      } else if (weight > 30) {
        price = parseFloat(distance) * 14;
      }
    } else if (size > 100 && size <= 200) {
      if (weight <= 1) {
        price = parseFloat(distance) * 8;
      } else if (weight > 1 && weight <= 5) {
        price = parseFloat(distance) * 9;
      } else if (weight > 5 && weight <= 10) {
        price = parseFloat(distance) * 10;
      } else if (weight > 10 && weight <= 30) {
        price = parseFloat(distance) * 13;
      } else if (weight > 30) {
        price = parseFloat(distance) * 15;
      }
    } else if (size > 200) {
      if (weight <= 1) {
        price = parseFloat(distance) * 9;
      } else if (weight > 1 && weight <= 5) {
        price = parseFloat(distance) * 10;
      } else if (weight > 5 && weight <= 10) {
        price = parseFloat(distance) * 11;
      } else if (weight > 10 && weight <= 30) {
        price = parseFloat(distance) * 15;
      } else if (weight > 30) {
        price = parseFloat(distance) * 17;
      }
    }
  }

  // LONG DISTANCE:

  if (distance > 300) {
    if (size <= 50) {
      if (weight <= 1) {
        price = parseFloat(distance) * 4;
      } else if (weight > 1 && weight <= 5) {
        price = parseFloat(distance) * 5;
      } else if (weight > 5 && weight <= 10) {
        price = parseFloat(distance) * 6;
      } else if (weight > 10 && weight <= 30) {
        price = parseFloat(distance) * 10;
      } else if (weight > 30) {
        price = parseFloat(distance) * 11;
      }
    } else if (size > 50 && size <= 100) {
      if (weight <= 1) {
        price = parseFloat(distance) * 5;
      } else if (weight > 1 && weight <= 5) {
        price = parseFloat(distance) * 6;
      } else if (weight > 5 && weight <= 10) {
        price = parseFloat(distance) * 7;
      } else if (weight > 10 && weight <= 30) {
        price = parseFloat(distance) * 12;
      } else if (weight > 30) {
        price = parseFloat(distance) * 13;
      }
    } else if (size > 100 && size <= 200) {
      if (weight <= 1) {
        price = parseFloat(distance) * 6;
      } else if (weight > 1 && weight <= 5) {
        price = parseFloat(distance) * 7;
      } else if (weight > 5 && weight <= 10) {
        price = parseFloat(distance) * 8;
      } else if (weight > 10 && weight <= 30) {
        price = parseFloat(distance) * 14;
      } else if (weight > 30) {
        price = parseFloat(distance) * 15;
      }
    } else if (size > 200) {
      if (weight <= 1) {
        price = parseFloat(distance) * 7;
      } else if (weight > 1 && weight <= 5) {
        price = parseFloat(distance) * 8;
      } else if (weight > 5 && weight <= 10) {
        price = parseFloat(distance) * 9;
      } else if (weight > 10 && weight <= 30) {
        price = parseFloat(distance) * 15;
      } else if (weight > 30) {
        price = parseFloat(distance) * 17;
      }
    }
  }

  //FAST DELEVERY:

  x = (parseFloat(price) * 30) / 100;

  if (document.getElementById("toggle").checked) {
    price = parseFloat(price) + parseFloat(x);
    document.getElementById("prc").value = price.toFixed(2) + " " + "DZD";
  } else {
    document.getElementById("prc").value = price.toFixed(2) + " " + "DZD";
  }
}

///////////////////POP-UP MESSAGE:

function PopUp() {
  var PopUp = document.getElementById("PopUp");
  var mail = document.getElementById("email").value;

  document.getElementById("mail").innerHTML = mail;
  PopUp.classList.toggle("active");
}
