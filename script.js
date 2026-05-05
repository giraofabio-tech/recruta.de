const menuButton = document.querySelector("[data-menu-button]");
const navLinks = document.querySelector("[data-nav-links]");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function(event) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      if (navLinks) {
        navLinks.classList.remove("open");
      }
    }
  });
});

const form = document.querySelector("[data-lead-form]");

if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const success = document.querySelector("[data-form-success]");
    if (success) {
      success.hidden = false;
    }

    form.reset();
  });
}

const cookieBanner = document.querySelector("[data-cookie-banner]");
const acceptCookies = document.querySelector("[data-accept-cookies]");
const declineCookies = document.querySelector("[data-decline-cookies]");

if (cookieBanner && !localStorage.getItem("recrutaCookieChoice")) {
  cookieBanner.classList.add("show");
}

function saveCookieChoice(choice) {
  localStorage.setItem("recrutaCookieChoice", choice);
  if (cookieBanner) {
    cookieBanner.classList.remove("show");
  }
}

if (acceptCookies) {
  acceptCookies.addEventListener("click", () => saveCookieChoice("accepted"));
}

if (declineCookies) {
  declineCookies.addEventListener("click", () => saveCookieChoice("declined"));
}
