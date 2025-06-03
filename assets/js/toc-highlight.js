document.addEventListener('DOMContentLoaded', function() {
  const tocLinks = document.querySelectorAll('#toc-list a');
  const tocItems = Array.from(tocLinks);
  const sections = tocItems.map(link => document.querySelector(link.getAttribute('href')));
  const isMobile = () => window.innerWidth <= 1179;
  const getOffset = () => isMobile() ? 120 : 100;

  const childToParentMap = new Map();
  tocItems.forEach(link => {
    const href = link.getAttribute('href');
    const target = document.querySelector(href);
    if (target) {
      const parentLink = link.closest('ul.submenu')?.parentElement?.querySelector('a');
      if (parentLink) {
        childToParentMap.set(target, document.querySelector(parentLink.getAttribute('href')));
      }
    }
  });

  let isManualScroll = false;
  let scrollTarget = null;

  function scrollTocItemIntoCenter(link) {
    if (isMobile() && link) {
      link.scrollIntoView({
        inline: 'center',
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  }

  tocItems.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        // Remove all active classes
        tocItems.forEach(link => link.classList.remove('active'));
        this.classList.add('active');

        // Remove lingering focus
        this.blur();

        isManualScroll = true;
        scrollTarget = targetSection;

        const offset = getOffset();
        const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        scrollTocItemIntoCenter(this); // Center clicked item
      }
    });
  });

  function onScroll() {
    if (isManualScroll) {
      if (scrollTarget) {
        const scrollPosition = window.scrollY + getOffset();
        const targetTop = scrollTarget.offsetTop;
        const distance = Math.abs(scrollPosition - targetTop);
        if (distance < 2) {
          isManualScroll = false;
          scrollTarget = null;
        }
      }
      return; // Skip highlight update during manual scroll
    }

    const scrollPosition = window.scrollY + getOffset();
    let closestSection = null;
    let smallestDistance = Infinity;

    sections.forEach(section => {
      if (section) {
        const distance = scrollPosition - section.offsetTop;
        if (distance >= 0 && distance < smallestDistance) {
          closestSection = section;
          smallestDistance = distance;
        }
      }
    });

    let activeLink = null;
    if (closestSection) {
      if (isMobile() && childToParentMap.has(closestSection)) {
        activeLink = tocItems.find(link => link.getAttribute('href') === `#${childToParentMap.get(closestSection).id}`);
      } else {
        activeLink = tocItems.find(link => link.getAttribute('href') === `#${closestSection.id}`);
      }
    }

    tocItems.forEach(link => link.classList.remove('active'));
    if (activeLink) {
      activeLink.classList.add('active');
      scrollTocItemIntoCenter(activeLink); // Center active item
    }
  }

  window.addEventListener('scroll', onScroll);
  window.addEventListener('resize', onScroll);
  onScroll(); // Initial highlight
});
