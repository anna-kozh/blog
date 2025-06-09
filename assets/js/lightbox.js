document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('img[id$="-thumb"]').forEach(img => {
    const id = img.id.replace('-thumb', '');
    const lightbox = document.getElementById(`${id}-lightbox`);
    const close = document.getElementById(`${id}-close`);

    if (lightbox && close) {
      img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        document.body.classList.add('body-lock-scroll');
      });

      const closeLightbox = () => {
        lightbox.style.display = 'none';
        document.body.classList.remove('body-lock-scroll');
      };

      close.addEventListener('click', closeLightbox);
      lightbox.addEventListener('click', e => {
        if (e.target === lightbox) closeLightbox();
      });
    } else {
      console.warn(`Lightbox or close button not found for ID: ${id}`);
    }
  });
});
