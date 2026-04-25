// THEME TOGGLE
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.onclick = () => {
  document.body.classList.toggle("dark");
};

// FADE ANIMATION ON SCROLL
const faders = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

faders.forEach(el => observer.observe(el));


// ✅ MODAL FIX (IMPORTANT)
function openModal(link) {
  const modal = document.getElementById("modal");
  const frame = document.getElementById("modalFrame");

  // fallback if iframe blocked
  frame.src = link;

  modal.style.display = "flex";

  // If Google blocks iframe → open new tab automatically
  setTimeout(() => {
    if (!frame.contentWindow || frame.contentWindow.length === 0) {
      window.open(link.replace("/preview", "/view"), "_blank");
    }
  }, 1200);
}

function closeModal() {
  const modal = document.getElementById("modal");
  const frame = document.getElementById("modalFrame");

  modal.style.display = "none";
  frame.src = "";
}

// CLOSE ON OUTSIDE CLICK
window.onclick = function (e) {
  const modal = document.getElementById("modal");
  if (e.target === modal) {
    closeModal();
  }
};
