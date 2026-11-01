/* ASAP — minimal progressive enhancement: mobile nav, dropdown toggles, scroll reveal. */
(function () {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var mobile = window.matchMedia('(max-width: 1199px)');

  if (toggle && header) {
    toggle.addEventListener('click', function () {
      var open = header.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open);
    });
  }

  // On mobile, the caret button opens a submenu; the parent link still navigates.
  document.querySelectorAll('.nav__item--has-sub > .nav__link[aria-haspopup]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      if (!mobile.matches) return;
      e.preventDefault();
      var item = btn.parentElement;
      var open = item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open);
    });
  });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
