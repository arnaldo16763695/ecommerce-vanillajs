const /** @type {HTMLElement} */ $bar = document.querySelector("#bar");
const /** @type {HTMLElement} */ $navbar = document.querySelector("#navbar");
const /** @type {HTMLElement} */ $close = document.querySelector("#close");
const /** @type {HTMLElement} */ $nav = document.querySelector("#nav");

if ($navbar) {
  $bar.addEventListener("click", () => {
    $navbar.classList.add('active');
  });
}

if ($close) {
  $close.addEventListener("click", () => {
    $navbar.classList.remove('active');
  });
}

if ($nav) {
  $nav.addEventListener("click", () => {
    $navbar.classList.remove('active');
  });
}

