
const panel = document.getElementById("panel");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const content = document.getElementById("content");

openBtn.onclick = () => panel.classList.add("active");
closeBtn.onclick = () => panel.classList.remove("active");

document.querySelectorAll("[data-font]").forEach(btn => {
  btn.onclick = () => {
    content.style.fontFamily = btn.dataset.font;
  };
});

document.querySelectorAll("[data-color]").forEach(btn => {
  btn.onclick = () => {
    content.style.background = btn.dataset.color;
    content.style.color = "white";
  };
});
