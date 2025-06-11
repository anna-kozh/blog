document.addEventListener('DOMContentLoaded', function () {
  const tocLinks = document.querySelectorAll('#toc-list a');
  const tocList = document.getElementById('toc-list');
  const isMobile = () => window.innerWidth < 793;

  const sections = Array.from(tocLinks).map(link => {
    const target = document.querySelector(link.getAttribute('href'));
    return { link, target };
  });

  const childToParentMap = {
    '#branding': '#design',
    '#configuration': '#design'
  };

  let scrollLock = false;
  let currentActive = null;

  function clearActive() {
    tocLinks.forEach(link => link.parentElement.classList.remove('active-toc'));
  }

  function setActive(link) {
    clearActive();
    link.parentElement.classList.add('active-toc');
    currentActive = link.getAttribute('href');

    if (isMobile()) {
      link.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }

  function getOffsetTop(el) {
    const rect = el.getBoundingClientRect();
    return window.scrollY + rect.top;
  }

  function findVisibleSection() {
    const scrollTop = window.scrollY + (isMobile() ? 120 : 100);
    for (let i = sections.length - 1; i >= 0; i--) {
      const { link, target } = sections[i];
      if (target && getOffsetTop(target) <= scrollTop) {
        const href = link.getAttribute('href');
        return isMobile() && childToParentMap[href] ? childToParentMap[href] : href;
      }
    }
    return null;
  }

  // Handle scroll to update active state
  window.addEventListener('scroll', () => {
    if (scrollLock) return;

    const visibleHref = findVisibleSection();
    if (visibleHref && visibleHref !== currentActive) {
      const newActiveLink = Array.from(tocLinks).find(link => link.getAttribute('href') === visibleHref);
      if (newActiveLink) {
        setActive(newActiveLink);
      }
    }
  });

  // Handle click to scroll to section
  tocLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      scrollLock = true;

      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        const yOffset = isMobile() ? 120 : 100;
        const y = getOffsetTop(target) - yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
        setActive(link);

        setTimeout(() => {
          scrollLock = false;
        }, 1000); // allow time for scroll to settle
      }
    });
  });
});
