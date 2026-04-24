document.querySelectorAll("a[href^='#']").forEach(anchor => {
anchor.addEventListener("click", function(e) {
e.preventDefault();
document.querySelector(this.getAttribute("href"))
.scrollIntoView({ behavior: "smooth" });
});
});

const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
faders.forEach(el => {
const top = el.getBoundingClientRect().top;
if (top < window.innerHeight - 100) {
el.classList.add("show");
}
});
});
