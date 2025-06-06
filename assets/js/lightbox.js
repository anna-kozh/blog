document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('img[id$="-thumb"]').forEach(img => {
    const id = img.id.replace('-thumb', '');
    const lightbox = document.getElementById(`${id}-lightbox`);
    const close = document.getElementById(`${id}-close`);

    const lockScroll = () => {
      document.body.style.overflow = 'hidden';
    };

    const unlockScroll = () => {
      document.body.style.overflow = '';
    };

    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lockScroll();
    });

    close.addEventListener('click', () => {
      lightbox.style.display = 'none';
      unlockScroll();
    });

    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) {
        lightbox.style.display = 'none';
        unlockScroll();
      }
    });
  });
});


