// ===== SETTINGS you can edit =====
const EMAIL = "your.email@example.com";                       // where the contact form sends mail
const TITLES = ["Software Engineering Student"];              // typing animation text (add more titles to cycle)

// ===== Typing animation =====
const typingEl = document.getElementById("typing");
let t = 0, c = 0, deleting = false;
function type() {
  const word = TITLES[t];
  typingEl.textContent = word.slice(0, c);
  if (!deleting && c === word.length) { deleting = true; return setTimeout(type, 1800); }
  if (deleting && c === 0) { deleting = false; t = (t + 1) % TITLES.length; }
  c += deleting ? -1 : 1;
  setTimeout(type, deleting ? 40 : 90);
}
type();

// ===== Mobile menu =====
const toggle = document.getElementById("menuToggle");
const links = document.getElementById("navLinks");
function setMenu(open) {
  links.classList.toggle("open", open);
  toggle.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", open);
}
toggle.addEventListener("click", () => setMenu(!links.classList.contains("open")));
links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));

// ===== Navbar style, back-to-top button, active link =====
const navbar = document.getElementById("navbar");
const toTop = document.getElementById("toTop");
const sections = document.querySelectorAll("main section[id]");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
  toTop.classList.toggle("show", window.scrollY > 600);
  let current = "home";
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 140) current = s.id; });
  links.querySelectorAll("a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
}, { passive: true });
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// ===== Scroll reveal + skill bars =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add("visible");
    const bar = e.target.querySelector(".bar i");
    if (bar) bar.style.width = e.target.dataset.level + "%";
    observer.unobserve(e.target);
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// ===== Contact form: opens the visitor's email app =====
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("cName").value.trim();
  const email = document.getElementById("cEmail").value.trim();
  const msg = document.getElementById("cMsg").value.trim();
  const body = encodeURIComponent(`${msg}\n\nFrom: ${name} (${email})`);
  window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Portfolio message from " + name)}&body=${body}`;
  document.getElementById("formNote").textContent = "Opening your email app...";
});

// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();
