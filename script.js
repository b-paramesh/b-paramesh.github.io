const toggle = document.getElementById("theme-toggle");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
document.body.classList.add("light");
toggle.textContent = "☀️";
}

toggle.onclick = () => {
document.body.classList.toggle("light");
const isLight = document.body.classList.contains("light");
toggle.textContent = isLight ? "☀️" : "🌙";
localStorage.setItem("theme", isLight ? "light" : "dark");
};

// Smooth scroll
document.querySelectorAll("a[href^='#']").forEach(anchor => {
anchor.onclick = function(e) {
e.preventDefault();
document.querySelector(this.getAttribute("href"))
.scrollIntoView({ behavior: "smooth" });
};
});

// Fade animation
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
faders.forEach(el => {
if (el.getBoundingClientRect().top < window.innerHeight - 100) {
el.classList.add("show");
}
});
});

// Modal
function openModal(link) {
document.getElementById("modal").style.display = "block";
document.getElementById("modalFrame").src = link;
}

function closeModal() {
document.getElementById("modal").style.display = "none";
}
