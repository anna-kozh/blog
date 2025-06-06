
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('img[id$="-thumb"]').forEach(img => {
    const id = img.id.replace('-thumb', '');
    const lightbox = document.getElementById(`${id}-lightbox`);
    const close = document.getElementById(`${id}-close`);

    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
    });

    close.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) {
        lightbox.style.display = 'none';
      }
    });
  });
});

