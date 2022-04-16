// Page Loader
window.addEventListener("load", () => {
  document.querySelector(".js-page-loader").classList.add(".fade-out");
  setTimeout(() => {
    document.querySelector(".js-page-loader").style.display = "none";
  }, 500);
});

// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const mobileNav = document.getElementById("mobileNav");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    mobileNav.classList.add("MobileNav-blur");
  } else {
    header.classList.remove("navbar-fixed");
    mobileNav.classList.remove("MobileNav-blur");
  }
};

// Active Navbar on Scroll
const links = document.querySelectorAll(".links");
const MobileLinks = document.querySelectorAll(".links-mobile");
const section = document.querySelectorAll("section");

function activeMenu() {
  let len = section.length;
  while (--len && window.scrollY + 150 < section[len].offsetTop) {}
  links.forEach((n) => n.classList.remove("activated"));
  MobileLinks.forEach((n) => n.classList.remove("activated-mobile"));
  links[len].classList.add("activated");
  MobileLinks[len].classList.add("activated-mobile");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

// Hamburger
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementsByClassName("js-toggle");
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("mobileNav");
  menuCollapseBreakpoint = 991;

  function toggleMenu() {
    for (let i = 0; i < navToggle.length; i++) {
      navToggle.item(i).classList.toggle("navActive");
      hamburger.classList.toggle("hamburger-active");
    }
  }

  function collapse() {
    for (let i = 0; i < navToggle.length; i++) {
      navToggle.item(i).classList.remove("navActive");
      hamburger.classList.remove("hamburger-active");
    }
  }

  hamburger.addEventListener("click", toggleMenu);

  // Close when clicking outside & link
  document.onclick = function (e) {
    if (e.target.id !== "mobileNav" && e.target.id !== "hamburger") {
      collapse();
    }
  };

  // CLose When resizing window
  window.addEventListener("resize", function () {
    if (this.innerWidth > menuCollapseBreakpoint && menu.classList.contains("navActive")) {
      toggleMenu();
    }

    if (this.innerWidth > menuCollapseBreakpoint && menu.querySelector(".activated-mobile")) {
      collapse();
    }
  });
});

// Dark Mode Toggle
let darkMode = localStorage.getItem("dark");
const toggleMode = document.querySelector("#toggleMode");

const enableDark = () => {
  document.documentElement.classList.add("dark");
  localStorage.setItem("dark", "enabled");
  document.getElementById("btnToggle").setAttribute("fill", "currentColor");
};
const disableDark = () => {
  document.documentElement.classList.remove("dark");
  localStorage.setItem("dark", null);
  document.getElementById("btnToggle").setAttribute("fill", "none");
};

if (darkMode === "enabled") {
  enableDark();
}

toggleMode.addEventListener("click", () => {
  darkMode = localStorage.getItem("dark");
  if (darkMode !== "enabled") {
    enableDark();
  } else {
    disableDark();
  }
});

//Contact Form
function validate() {
  let name = document.querySelector("#name");
  let email = document.querySelector("#email");
  let subjectInput = document.querySelector("#subject");
  let messageInput = document.querySelector("#text");
  const btnSend = document.querySelector(".btnSend");
  const btnLoading = document.querySelector(".btnSending");

  btnSend.addEventListener("click", (e) => {
    e.preventDefault();
    btnSend.classList.toggle("hidden");
    btnLoading.classList.toggle("hidden");
    if (name.value == "" || email.value == "" || subjectInput.value == "" || messageInput.value == "") {
      btnSend.classList.toggle("hidden");
      btnLoading.classList.toggle("hidden");
      alertError.classList.toggle("alert-open");
      alertError.classList.toggle("alert-close");
    } else {
      btnSend.classList.toggle("hidden");
      btnLoading.classList.toggle("hidden");
      sendmail(name.value, email.value, subjectInput.value, messageInput.value);
      alertSuccess.classList.toggle("alert-open");
      alertSuccess.classList.toggle("alert-close");
    }
  });
}
validate();

function sendmail(name, email, subjectInput, messageInput) {
  emailjs.send("service_dtzuah1", "template_hktk0y4", {
    subject: subjectInput,
    from_email: email,
    to_name: "Joppan Aditya",
    from_name: name,
    message: messageInput,
  });
}

///== Using Google Spreadsheet ==///
// const scriptURL = "https://script.google.com/macros/s/AKfycbw-mjTEoBvSON-av80gkOf9Bn4THbWHDt_QZ3mC9jhuBx2FlSoOoDbujRY3uWNCNfGd/exec";
// const form = document.forms["contact-form"];
// const btnSend = document.querySelector(".btnSend");
// const btnLoading = document.querySelector(".btnSending");

// function sendMessage() {
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     btnLoading.classList.toggle("hidden");
//     btnSend.classList.toggle("hidden");
//     fetch(scriptURL, { method: "POST", body: new FormData(form) })
//       .then((response) => {
//         console.log("Success!", response);
//         btnLoading.classList.toggle("hidden");
//         btnSend.classList.toggle("hidden");
//         alertSuccess.classList.toggle("alert-open");
//         alertSuccess.classList.toggle("alert-close");
//         form.reset();
//       })
//       .catch((error) => {
//         console.error("Error!", error.message);
//         alertError.classList.toggle("alert-open");
//         alertError.classList.toggle("alert-close");
//         form.reset();
//       });
//   });
// }

// Scroll to Top
var scrollTop = document.getElementById("scrollBtn");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 800) {
    scrollTop.classList.add("scrollActive");
  } else {
    scrollTop.classList.remove("scrollActive");
  }
});

// Alerts
const alertBtn = document.querySelector(".alertBtn");
const alertBtnError = document.querySelector(".alertBtnError");
const alertSuccess = document.querySelector(".alert-success");
const alertError = document.querySelector(".alert-error");

alertBtn.addEventListener("click", function () {
  alertSuccess.classList.toggle("alert-open");
  alertSuccess.classList.toggle("alert-close");
});
alertBtnError.addEventListener("click", function () {
  alertError.classList.toggle("alert-open");
  alertError.classList.toggle("alert-close");
});

// Tilt js
VanillaTilt.init(document.querySelectorAll(".tiltBox"), {
  max: 25,
  speed: 1000,
  scale: 1.1,
  glare: true,
  "max-glare": 0.5,
});

// GSAP
gsap.registerPlugin(TextPlugin);

let tl = gsap.timeline({
  defaults: {
    duration: 1.2,
    opacity: 0,
    scale: 1,
    ease: "power1.out",
  },
});
tl.from(".heroTitle", { delay: 1 })
  .fromTo(".heroTitle > span", { y: "-50px", text: " " }, { duration: 1.5, y: "0", opacity: 1, text: "Joppan" }, "-=1")
  .from(".heroAnim", { stagger: 0.5, y: "-100%" }, "-=.5")
  .fromTo(".heroBtn", { scale: 0 }, { duration: 1.5, opacity: 1, ease: "elastic.out(1, 0.3)" }, "-=2")
  .from(".heroSocial", { stagger: 0.3, x: "-100%" }, "-=2")
  .from(".tiltHero > span", { x: "100%" }, "-=1.5")
  .fromTo(".tiltHero > img", { scale: 0 }, { opacity: 1, ease: "back.out(1.7)" }, "-=.7")
  .fromTo(".scroll-down", { scale: 0 }, { opacity: 1, ease: "back.out(1.7)" }, "-=.5");

// AOS
const secH2 = document.querySelectorAll(".secTitle > h2");
const secH4 = document.querySelectorAll(".secTitle > h4");
const contactCard = document.querySelectorAll(".contactCard");
const formTitle = document.querySelectorAll(".contactForm > label");
const formInput = document.querySelectorAll(".contactForm > input");
const h3 = document.querySelectorAll(".portfolio > h3");
const p = document.querySelectorAll(".portfolio > p");
const img = document.querySelectorAll(".portfolio > div");
const skillsAnim = document.querySelectorAll(".skillsAnim");

secH2.forEach((title, i) => {
  title.dataset.aos = "fade-down";
  title.dataset.aosAnchorPlacement = "bottom-bottom";
});
secH4.forEach((title, i) => {
  title.dataset.aos = "zoom-in";
  title.dataset.aosDelay = "500";
  title.dataset.aosAnchorPlacement = "bottom-bottom";
});
img.forEach((img, i) => {
  img.dataset.aos = "flip-down";
  img.dataset.aosDelay = i * 100;
  img.dataset.aosAnchorPlacement = "top-bottom";
});
h3.forEach((port, i) => {
  port.dataset.aos = "zoom-in-up";
  port.dataset.aosDelay = i * 150;
  port.dataset.aosAnchorPlacement = "top-bottom";
});
p.forEach((port, i) => {
  port.dataset.aos = "zoom-in-up";
  port.dataset.aosDelay = i * 200;
  port.dataset.aosAnchorPlacement = "top-bottom";
});
contactCard.forEach((card, i) => {
  card.dataset.aos = "zoom-out";
  card.dataset.aosDelay = i * 100;
});
formTitle.forEach((label, i) => {
  label.dataset.aos = "zoom-in-left";
});
formInput.forEach((input, i) => {
  input.dataset.aos = "zoom-in";
});
skillsAnim.forEach((progress, i) => {
  progress.dataset.aos = "zoom-in-down";
  progress.dataset.aosDelay = i * 200;
});

AOS.init({
  once: true,
  duration: 1000,
  anchorPlacement: "center-bottom",
  easing: "ease-in-out",
});
