const cardbutton = document.querySelector("#card-button");
const close = document.querySelector(".close");
const modal = document.querySelector(".modal");

close.addEventListener("click", toggleModale);
cardbutton.addEventListener("click", toggleModale);


function toggleModale() {
  modal.classList.toggle("is-open");
}
