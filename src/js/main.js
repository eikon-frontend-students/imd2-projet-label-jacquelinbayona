// ...existing code...
const loadIframe = (container, src) => {
  if (!src) return;
  const iframe = document.createElement("iframe");
  iframe.className = "bitt-widget-iframe";
  iframe.src = src;
  iframe.loading = "lazy";
  iframe.title = container.getAttribute("data-artist") + " tour dates";
  // sécurité pour les liens target=_blank dans le widget
  iframe.referrerPolicy = "no-referrer-when-downgrade";
  container.querySelector(".bit-widget-placeholder").replaceWith(iframe);
};

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".hometour-load-btn");
  if (!btn) return;
  const src = btn.dataset.src;
  const container = btn.closest(".hometour-embed");
  loadIframe(container, src);
});

// lazy auto-load when element enters viewport
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const embed = entry.target;
          const btn = embed.querySelector(".hometour-load-btn");
          if (btn) {
            loadIframe(embed, btn.dataset.src);
          }
          obs.unobserve(embed);
        }
      });
    },
    { rootMargin: "200px" }
  );
  document.querySelectorAll(".hometour-embed").forEach((el) => io.observe(el));
} else {
  // fallback: do nothing — user can click to load
}
