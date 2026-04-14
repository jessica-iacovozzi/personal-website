// ── CUSTOM CURSOR ──
if (window.matchMedia("(hover: hover)").matches) {
  const cursor = document.getElementById("cursor");
  const ring = document.getElementById("cursor-ring");
  let mouseX = 0,
    mouseY = 0,
    ringX = 0,
    ringY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + "px";
    ring.style.top = ringY + "px";
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document
    .querySelectorAll("a, button, .project-card, .skill-group, .tag")
    .forEach((el) => {
      el.addEventListener("mouseenter", () => cursor.classList.add("hovering"));
      el.addEventListener("mouseleave", () =>
        cursor.classList.remove("hovering"),
      );
    });
}

// ── PROJECT MOCKUP (touch toggle) ──
if (window.matchMedia("(hover: none)").matches) {
  document.querySelectorAll(".project-card").forEach((card) => {
    if (!card.querySelector(".project-mockup")) return;
    card.addEventListener("click", (e) => {
      if (e.target(".project-mockup-cta")) return;
      const isActive = card.classList.toggle("mockup-active");
      if (isActive) {
        document
          .querySelectorAll(".project-card.mockup-active")
          .forEach((other) => {
            if (other !== card) other.classList.remove("mockup-active");
          });
      }
    });
  });
}

// ── SCROLL REVEAL ──
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ── NAV SCROLL BLUR ──
const nav = document.querySelector("nav");
window.addEventListener(
  "scroll",
  () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
  },
  { passive: true },
);

// ── HAMBURGER MENU ──
const hamburger = document.querySelector(".nav-hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  function closeMenu() {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
    nav.classList.remove("menu-open");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  hamburger.addEventListener("click", () => {
    const isOpen = hamburger.classList.toggle("open");
    navLinks.classList.toggle("open", isOpen);
    nav.classList.toggle("menu-open", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen.toString());
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (isOpen) {
      const firstLink = navLinks.querySelector("a");
      if (firstLink) firstLink.focus();
    }
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      closeMenu();

      if (href && href.startsWith("#") && href !== "#") {
        setTimeout(() => {
          const targetId = href.substring(1);
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
            const heading = targetSection.querySelector(
              "h1, h2, h3, h4, h5, h6",
            );
            if (heading) {
              heading.setAttribute("tabindex", "-1");
              heading.focus();
              heading.addEventListener(
                "blur",
                () => heading.removeAttribute("tabindex"),
                { once: true },
              );
            }
          }
        }, 100);
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && hamburger.classList.contains("open")) {
      closeMenu();
      hamburger.focus();
    }

    if (hamburger.classList.contains("open") && e.key === "Tab") {
      const focusableElements = navLinks.querySelectorAll("a");
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  });
}
