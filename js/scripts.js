const footer = document.getElementById("footer");
const social = document.getElementById("social");
const btn = document.getElementById("btn");

function showSocial() {
  footer.classList.toggle("active");
  social.classList.toggle("active2");
  btn.classList.toggle("dark");
}
