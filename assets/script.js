const root = document.documentElement;
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll('.site-nav a[href*="#"]');
const imageTriggers = document.querySelectorAll(".inline-image-trigger");
const valorantPanel = document.querySelector("#valorant-panel");
const awardCertificateTriggers = document.querySelectorAll(".award-certificate-trigger");
const navSections = Array.from(navLinks)
  .map((link) => document.querySelector(link.hash))
  .filter(Boolean);

const setActiveNav = (id) => {
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.hash === `#${id}`);
  });
};

const updateActiveNav = () => {
  const hashId = decodeURIComponent(window.location.hash.slice(1));
  const hashSection = hashId ? document.getElementById(hashId) : null;
  if (hashSection) {
    const rect = hashSection.getBoundingClientRect();
    if (rect.top >= 0 && rect.top < window.innerHeight) {
      setActiveNav(hashId);
      return;
    }
  }

  let currentId = navSections[0]?.id;
  const marker = window.scrollY + 120;
  navSections.forEach((section) => {
    if (section.offsetTop <= marker) {
      currentId = section.id;
    }
  });
  if (currentId) {
    setActiveNav(currentId);
  }
};

menuToggle?.addEventListener("click", () => {
  const isOpen = siteNav?.classList.toggle("open") ?? false;
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    const id = event.target.hash.slice(1);
    if (id) {
      setActiveNav(id);
    }
    siteNav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  }
});

window.addEventListener("scroll", updateActiveNav, { passive: true });
window.addEventListener("hashchange", updateActiveNav);
updateActiveNav();

imageTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const nextOpen = valorantPanel?.hasAttribute("hidden") ?? false;
    if (nextOpen) {
      valorantPanel?.removeAttribute("hidden");
    } else {
      valorantPanel?.setAttribute("hidden", "");
    }
    imageTriggers.forEach((item) => {
      item.setAttribute("aria-expanded", String(nextOpen));
    });
  });
});

awardCertificateTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const panelId = trigger.getAttribute("aria-controls");
    const panel = panelId ? document.getElementById(panelId) : null;
    const nextOpen = panel?.hasAttribute("hidden") ?? false;
    if (nextOpen) {
      panel?.removeAttribute("hidden");
    } else {
      panel?.setAttribute("hidden", "");
    }
    trigger.setAttribute("aria-expanded", String(nextOpen));
  });
});
