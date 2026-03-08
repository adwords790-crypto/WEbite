// ===========================
// ZENITH CORPORATION — GLOBAL JS
// ===========================

document.addEventListener('DOMContentLoaded', () => {

  // --- CUSTOM CURSOR ---
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursorRing');
  if (cursor && ring) {
    document.addEventListener('mousemove', e => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top  = e.clientY + 'px';
      setTimeout(() => {
        ring.style.left = e.clientX + 'px';
        ring.style.top  = e.clientY + 'px';
      }, 60);
    });
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', () => { ring.style.width='52px'; ring.style.height='52px'; cursor.style.width='6px'; cursor.style.height='6px'; });
      el.addEventListener('mouseleave', () => { ring.style.width='36px'; ring.style.height='36px'; cursor.style.width='10px'; cursor.style.height='10px'; });
    });
  }

  // --- NAV SCROLL ---
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  // --- ACTIVE NAV LINK ---
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) a.classList.add('active');
  });

  // --- SCROLL REVEAL ---
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(r => observer.observe(r));

  // --- MOBILE NAV ---
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const open = navLinks.style.display === 'flex';
      navLinks.style.display = open ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'fixed';
      navLinks.style.top = 'var(--nav-h)';
      navLinks.style.left = '0'; navLinks.style.right = '0';
      navLinks.style.background = 'var(--white)';
      navLinks.style.padding = '2rem 6vw';
      navLinks.style.gap = '1.5rem';
      navLinks.style.borderBottom = '1px solid var(--line)';
    });
  }

  // --- CONTACT FORM ---
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button[type=submit]');
      btn.textContent = 'Message Sent ✓';
      btn.style.background = '#2a7a4a';
      btn.style.borderColor = '#2a7a4a';
      btn.disabled = true;
    });
  }

});
