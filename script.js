// script.js – Postiz Social Manager Privacy Policy Site
// Minimal progressive enhancement only. Core content works without JS.

(function () {
  'use strict';

  // ── Highlight current nav link based on page ──────────────────────────
  function highlightActiveNav() {
    var page = window.location.pathname.split('/').pop() || 'index.html';
    var links = document.querySelectorAll('.nav-links a');
    links.forEach(function (link) {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
      var href = link.getAttribute('href') || '';
      if (href === page || (page === '' && href === 'index.html')) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  // ── Smooth scroll for anchor links ───────────────────────────────────
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Update URL hash without jumping
          history.pushState(null, '', anchor.getAttribute('href'));
        }
      });
    });
  }

  // ── Update footer year automatically ─────────────────────────────────
  function updateYear() {
    var yearEls = document.querySelectorAll('.js-year');
    var year = new Date().getFullYear();
    yearEls.forEach(function (el) { el.textContent = year; });
  }

  // ── Init ──────────────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    highlightActiveNav();
    initSmoothScroll();
    updateYear();
  });

})();
