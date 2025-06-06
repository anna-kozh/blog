document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('img[id$="-thumb"]').forEach(img => {
    const id = img.id.replace('-thumb', '');
    const lightbox = document.getElementById(`${id}-lightbox`);
    const close = document.getElementById(`${id}-close`);

    // Check if lightbox and close elements exist before attaching listeners
    if (lightbox && close) {
        img.addEventListener('click', () => {
          lightbox.style.display = 'flex';
          // Prevent background scrolling when lightbox is open
          document.body.style.overflow = 'hidden'; // ADDED: Prevents scrolling on the body
        });

        close.addEventListener('click', () => {
          lightbox.style.display = 'none';
          // Re-enable background scrolling when lightbox is closed
          document.body.style.overflow = ''; // ADDED: Clears the inline overflow style
        });

        lightbox.addEventListener('click', e => {
          if (e.target === lightbox) {
            lightbox.style.display = 'none';
            // Re-enable background scrolling when lightbox is closed
            document.body.style.overflow = ''; // ADDED: Clears the inline overflow style
          }
        });
    } else {
        console.warn(`Lightbox or close button not found for ID: ${id}`);
    }
  });
});


