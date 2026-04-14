(function () {
  const dialog = document.getElementById("screenshot-lightbox");
  const dialogImg = dialog?.querySelector(".lightbox__img");
  const dialogCap = dialog?.querySelector(".lightbox__caption");
  const scrim = dialog?.querySelector(".lightbox__scrim");
  if (!dialog || !dialogImg || !dialogCap || !scrim) return;

  scrim.addEventListener("click", function (e) {
    if (e.target === scrim) dialog.close();
  });

  document.querySelectorAll("a.screenshot-thumb[data-lightbox]").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const img = link.querySelector("img");
      if (!img) return;
      dialogImg.src = img.currentSrc || img.src;
      dialogImg.alt = img.alt;
      const capText =
        link.closest("figure")?.querySelector(".caption")?.textContent?.trim() ?? "";
      dialogCap.textContent = capText;
      dialogCap.hidden = !capText;
      dialog.showModal();
    });
  });
})();
