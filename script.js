(() => {
  'use strict';

  const menuToggle = document.getElementById('menu-toggle');
  const navigation = document.getElementById('primary-navigation');
  const header = document.querySelector('.site-header');
  const progressFill = document.getElementById('scroll-progress-fill');
  const year = document.getElementById('current-year');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (year) year.textContent = String(new Date().getFullYear());

  const closeMenu = () => {
    if (!menuToggle || !navigation) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation menu');
    navigation.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  };

  if (menuToggle && navigation) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
      navigation.classList.toggle('is-open', !isOpen);
      document.body.classList.toggle('menu-open', !isOpen);
    });

    navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 850) closeMenu();
    }, { passive: true });
  }

  let ticking = false;
  const updateScrollEffects = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = scrollableHeight > 0 ? Math.min(100, (scrollTop / scrollableHeight) * 100) : 0;
    if (progressFill) progressFill.style.width = `${percent}%`;
    if (header) header.classList.toggle('is-scrolled', scrollTop > 8);
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollEffects);
      ticking = true;
    }
  }, { passive: true });
  updateScrollEffects();

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reducedMotion) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { root: null, threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...document.querySelectorAll('.primary-navigation a[href^="#"]')];
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const hash = `#${entry.target.id}`;
        navLinks.forEach((link) => {
          const active = link.getAttribute('href') === hash;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-28% 0px -58% 0px', threshold: 0 });
    sections.forEach((section) => sectionObserver.observe(section));
  }

  // If a hosted image cannot be reached, retain a clean, colored image surface.
  document.querySelectorAll('img').forEach((img) => {
    img.addEventListener('error', () => {
      if (img.dataset.fallbackApplied) return;
      img.dataset.fallbackApplied = 'true';
      img.style.opacity = '0';
      const parent = img.parentElement;
      if (parent) parent.classList.add('image-unavailable');
    }, { once: true });
  });
})();
