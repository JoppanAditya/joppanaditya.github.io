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
  const form = document.forms["contact-form"];
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
      form.reset();
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
    reply_to: email,
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
