let menuToggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
menuToggle.addEventListener("click", (eo) => {
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
});
