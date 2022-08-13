const trigger = document.querySelector("#trigger");
const modelWrapper = document.querySelector(".modal_wrapper");
const closeBtn = document.querySelector(".close");

trigger.addEventListener("click", function () {
  modelWrapper.classList.add("active");
});

closeBtn.addEventListener("click", function () {
  modelWrapper.classList.remove("active");
});

modelWrapper.addEventListener("click", function (e) {
  if (e.target !== this) return;
  modelWrapper.classList.remove("active");
});

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") modelWrapper.classList.remove("active");
});
