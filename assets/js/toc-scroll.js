document.addEventListener('DOMContentLoaded', function () {
  const toc = document.getElementById('mobile-toc');

  if (!toc) return;

  const tocOffset = toc.offsetTop;

  window.addEventListener('scroll', function () {
    const isMobile = window.innerWidth <= 1224;

    if (isMobile) {
      if (window.scrollY > tocOffset) {
        toc.classList.add('fixed');
      } else {
        toc.classList.remove('fixed');
      }
    } else {
      toc.classList.remove('fixed'); // reset for larger screens
    }
  });
});
