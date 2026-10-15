'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); };

// ---------- Sidebar ----------
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
}

// ---------- Page navigation (runs first so nothing below can break it) ----------
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    const target = this.textContent.trim().toLowerCase();

    pages.forEach(function (page) {
      const isMatch = page.dataset.page.trim().toLowerCase() === target;
      page.classList.toggle("active", isMatch);
    });

    navigationLinks.forEach(function (l) { l.classList.remove("active"); });
    this.classList.add("active");
    window.scrollTo(0, 0);
  });
});

// ---------- Testimonials modal ----------
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

if (modalContainer && overlay && modalCloseBtn) {
  testimonialsItem.forEach(function (item) {
    item.addEventListener("click", function () {
      const avatar = this.querySelector("[data-testimonials-avatar]");
      modalImg.src = avatar.src;
      modalImg.alt = avatar.alt;
      modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
      modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
      testimonialsModalFunc();
    });
  });

  modalCloseBtn.addEventListener("click", testimonialsModalFunc);
  overlay.addEventListener("click", testimonialsModalFunc);
}

// ---------- Eatsy animation ----------
document.addEventListener("DOMContentLoaded", function () {
  const screens = document.querySelectorAll('.eatsy-animation .screen');
  if (!screens.length) return;
  let current = 0;

  function showNextScreen() {
    screens[current].classList.remove('active');
    screens[current].classList.add('exit-left');

    current = (current + 1) % screens.length;

    screens[current].classList.remove('exit-left');
    screens[current].classList.add('active');

    setTimeout(showNextScreen, 3000);
  }

  setTimeout(showNextScreen, 3000);
});

// ---------- Gallery filter (optional section) ----------
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  filterItems.forEach(function (item) {
    if (selectedValue === "all" || selectedValue === item.dataset.category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

if (select && selectValue) {
  select.addEventListener("click", function () { elementToggleFunc(this); });

  selectItems.forEach(function (item) {
    item.addEventListener("click", function () {
      selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(this.innerText.toLowerCase());
    });
  });

  let lastClickedBtn = filterBtn[0];
  filterBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
      selectValue.innerText = this.innerText;
      filterFunc(this.innerText.toLowerCase());
      if (lastClickedBtn) lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;
    });
  });
}

// ---------- Publication filter ----------
function filterPublications(category) {
  const items = document.getElementsByClassName('publication-item');
  const buttons = document.getElementsByClassName('filter-btn');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
  }

  for (let i = 0; i < items.length; i++) {
    const show = category === 'all' || items[i].classList.contains(category);
    items[i].style.display = show ? 'block' : 'none';
  }

  const activeBtn = document.querySelector(`.filter-btn[onclick="filterPublications('${category}')"]`);
  if (activeBtn) activeBtn.classList.add('active');
}
