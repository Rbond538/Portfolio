const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");
if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const open = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
  navigation.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }),
  );
}
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, obs) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      }),
    { threshold: 0.12 },
  );
  revealItems.forEach((item) => observer.observe(item));
} else revealItems.forEach((item) => item.classList.add("visible"));
document
  .querySelectorAll(".year")
  .forEach((el) => (el.textContent = new Date().getFullYear()));

const sectionLinks = document.querySelectorAll(
  ".nav-links a[href^='#']:not(.nav-cta)",
);
const sections = [...sectionLinks]
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length) {
  const activeObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      sectionLinks.forEach((link) =>
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${visible.target.id}`,
        ),
      );
    },
    { rootMargin: "-20% 0px -55%", threshold: [0.05, 0.25, 0.5] },
  );
  sections.forEach((section) => activeObserver.observe(section));
}
