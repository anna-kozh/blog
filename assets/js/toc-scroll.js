document.querySelectorAll('#toc-list a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);
    if (!targetEl) return;

    // Scroll to section (adjust as needed)
    const offset = window.innerWidth < 768 ? 100 : 80;
    const scrollY = targetEl.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top: scrollY, behavior: 'smooth' });

    // Remove stuck hover by blurring
    this.blur(); // clear focus from clicked link
    setTimeout(() => this.blur(), 50); // fallback in case iOS delays focus

    // Optional: update active class
    document.querySelectorAll('#toc-list li').forEach(li => li.classList.remove('active-toc'));
    this.parentElement.classList.add('active-toc');
  });
});
