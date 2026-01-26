"use strict";

const dropDown = document.querySelectorAll(".drop-dovn-wrapper");

dropDown.forEach((dropDownWrapper) => {
  const button = dropDownWrapper.querySelector(".drop-button");

  const list = dropDownWrapper.querySelector(".drop-down-list");

  const items = dropDownWrapper.querySelectorAll(".drop-down-list-item");

  const input = dropDownWrapper.querySelector(".input");

  button.addEventListener("click", (event) => {
    list.classList.toggle("hidden");
    event.stopPropagation();
  });

  items.forEach((item) => {
    item.addEventListener("click", (event) => {
      button.textContent = item.textContent;
      input.value = item.dataset.value;
      list.classList.remove("hidden");
      button.focus();
    });
  });

  document.addEventListener("click", (event) => {
    if (event.target !== button) {
      list.classList.add("hidden");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Tab" || event.key === "Escape") {
      list.classList.add("hidden");
    }
  });
});
