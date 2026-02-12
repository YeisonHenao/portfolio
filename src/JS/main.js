// Intersection Observer for reveal animations
const observerOptions = { threshold: 0.12, rootMargin: '0px 0px -60px 0px' };
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, observerOptions);
document.querySelectorAll('.reveal, .animate-on-scroll').forEach((el) => revealObserver.observe(el));

// Scroll progress bar update
function ensureScrollProgress() {
  let bar = document.querySelector('.scroll-progress-bar');
  if (!bar) {
    bar = document.createElement('div');
    bar.className = 'scroll-progress-bar';
    document.body.appendChild(bar);
  }

  const update = () => {
    const h = document.documentElement;
    const scrollTop = h.scrollTop || document.body.scrollTop;
    const docHeight = h.scrollHeight - h.clientHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) : 0;
    bar.style.transform = `scaleX(${pct})`;
  };

  window.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
  update();
}

// Cursor glow (desktop only)
function ensureCursorGlow() {
  if (window.matchMedia('(hover: none)').matches) return;
  let glow = document.querySelector('.cursor-glow');
  if (!glow) {
    glow = document.createElement('div');
    glow.className = 'cursor-glow';
    glow.setAttribute('aria-hidden', 'true');
    document.body.appendChild(glow);
  }

  let mouseX = 0, mouseY = 0, glowX = 0, glowY = 0;
  const onMove = (e) => { mouseX = e.clientX; mouseY = e.clientY; };
  window.addEventListener('mousemove', onMove, { passive: true });

  let rafId;
  const animate = () => {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    glow.style.left = `${glowX}px`;
    glow.style.top = `${glowY}px`;
    rafId = requestAnimationFrame(animate);
  };
  rafId = requestAnimationFrame(animate);

  // cleanup on unload
  window.addEventListener('beforeunload', () => {
    window.removeEventListener('mousemove', onMove);
    cancelAnimationFrame(rafId);
    glow.remove();
  });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  ensureScrollProgress();
  ensureCursorGlow();
  initNavigation();
});

// Navigation helpers: sticky header, active link, mobile menu
function initNavigation() {
  const header = document.getElementById('site-header');
  const navLinks = document.querySelectorAll('a.nav-link');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (navLinks.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === `#${id}`));
        }
      });
    }, { rootMargin: '-40% 0px -60% 0px' });
    document.querySelectorAll('section[id]').forEach((s) => sectionObserver.observe(s));
  }

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const open = mobileMenu.style.maxHeight && mobileMenu.style.maxHeight !== '0px';
      if (open) {
        mobileMenu.style.maxHeight = '0';
        mobileMenu.style.opacity = '0';
        mobileToggle.setAttribute('aria-expanded', 'false');
      } else {
        mobileMenu.style.maxHeight = '320px';
        mobileMenu.style.opacity = '1';
        mobileToggle.setAttribute('aria-expanded', 'true');
      }
    });
  }
}
