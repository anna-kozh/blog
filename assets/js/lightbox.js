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
  // --- Lightbox setup ---
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

  // --- Lazy load setup ---
  const lazyImages = document.querySelectorAll('img.lazy-img');

  if (!('IntersectionObserver' in window)) {
    // Fallback: load all images immediately
    lazyImages.forEach(img => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.classList.remove('lazy-img');
      }
    });
    return;
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.classList.remove('lazy-img');
          observer.unobserve(img);
        }
      }
    });
  }, {
    root: null,
    rootMargin: "200px",
    threshold: 0.01
  });

  lazyImages.forEach(img => observer.observe(img));
});

// --- Fallback for images missed by observer ---
window.addEventListener('load', () => {
  document.querySelectorAll('img.lazy-img').forEach(img => {
    if (img.dataset.src) {
      img.src = img.dataset.src;
      img.classList.remove('lazy-img');
    }
  });
});
