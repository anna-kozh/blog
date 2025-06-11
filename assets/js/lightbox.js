// Lock scroll without jumping to top
function lockScroll() {
  const scrollY = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.left = '0';
  document.body.style.right = '0';
  document.body.dataset.scrollY = scrollY;
}

function unlockScroll() {
  const scrollY = document.body.dataset.scrollY;
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';
  document.body.style.right = '';
  document.body.removeAttribute('data-scroll-y');
  window.scrollTo(0, parseInt(scrollY || '0'));
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('img[id$="-thumb"]').forEach(img => {
    const id = img.id.replace('-thumb', '');
    const lightbox = document.getElementById(`${id}-lightbox`);
    const close = document.getElementById(`${id}-close`);

    if (lightbox && close) {
      img.addEventListener('click', () => {
        lockScroll();
        lightbox.style.display = 'flex';
      });

      const closeLightbox = () => {
        lightbox.style.display = 'none';
        unlockScroll();
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
