"use strict";

// ADD AN EVENT LISTENER ON MULTIPLE ELEMENTS
const addEventOnElements = function (elements, evenType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(evenType, callback);
  }
};

// PRELOADING
const loadingElement = document.querySelector("[data-loading]");
window.addEventListener("load", function () {
  loadingElement.classList.add("loaded");
  document.body.classList.remove("active");
});
