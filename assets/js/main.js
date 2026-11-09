document.addEventListener('DOMContentLoaded', function () {
      const yr = document.getElementById('year');
      if (yr) yr.textContent = new Date().getFullYear();

      const menuBtn = document.getElementById('mobileMenuBtn');
      const drawer = document.getElementById('mobileDrawer');
      if (menuBtn && drawer) {
        menuBtn.addEventListener('click', function () {
          const isOpen = drawer.classList.contains('open');
          drawer.classList.toggle('open');
          menuBtn.classList.toggle('active');
          menuBtn.setAttribute('aria-expanded', !isOpen);
        });

        drawer.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', () => {
            drawer.classList.remove('open');
            menuBtn.classList.remove('active');
            menuBtn.setAttribute('aria-expanded', 'false');
          });
        });
      }

      const reveals = document.querySelectorAll('.reveal');
      if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              observer.unobserve(entry.target);
            }
          });
        }, {
          threshold: 0.12,
          rootMargin: '0px 0px -40px 0px'
        });

        reveals.forEach(el => revealObserver.observe(el));
      } else {
        reveals.forEach(el => el.classList.add('active'));
      }

      const testimSlides = document.querySelectorAll('.testim-slide');
      const testimDots = document.querySelectorAll('.testim-dot');
      const testimPrevBtn = document.getElementById('testimPrevBtn');
      const testimNextBtn = document.getElementById('testimNextBtn');
      const testimBox = document.getElementById('testimonialBox');

      if (testimSlides.length > 0) {
        let currentTestimIndex = 0;
        let testimTimer = null;
        const totalTestim = testimSlides.length;
        const AUTO_INTERVAL = 4800;

        function showTestim(index) {
          if (index < 0) index = totalTestim - 1;
          if (index >= totalTestim) index = 0;
          currentTestimIndex = index;

          testimSlides.forEach((slide, idx) => {
            if (idx === index) {
              slide.classList.add('active');
            } else {
              slide.classList.remove('active');
            }
          });

          testimDots.forEach((dot, idx) => {
            if (idx === index) {
              dot.classList.add('active');
            } else {
              dot.classList.remove('active');
            }
          });
        }

        function nextTestim() {
          showTestim(currentTestimIndex + 1);
        }

        function prevTestim() {
          showTestim(currentTestimIndex - 1);
        }

        function startAutoPlay() {
          stopAutoPlay();
          testimTimer = setInterval(nextTestim, AUTO_INTERVAL);
        }

        function stopAutoPlay() {
          if (testimTimer) {
            clearInterval(testimTimer);
            testimTimer = null;
          }
        }

        startAutoPlay();

        if (testimBox) {
          testimBox.addEventListener('mouseenter', stopAutoPlay);
          testimBox.addEventListener('mouseleave', startAutoPlay);

          let touchStartX = 0;
          let touchEndX = 0;
          testimBox.addEventListener('touchstart', e => {
            stopAutoPlay();
            touchStartX = e.changedTouches[0].screenX;
          }, { passive: true });
          testimBox.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 45) {
              nextTestim();
            } else if (touchEndX - touchStartX > 45) {
              prevTestim();
            }
            startAutoPlay();
          }, { passive: true });
        }

        if (testimPrevBtn) {
          testimPrevBtn.addEventListener('click', () => {
            prevTestim();
            startAutoPlay();
          });
        }
        if (testimNextBtn) {
          testimNextBtn.addEventListener('click', () => {
            nextTestim();
            startAutoPlay();
          });
        }

        testimDots.forEach((dot, idx) => {
          dot.addEventListener('click', () => {
            showTestim(idx);
            startAutoPlay();
          });
        });
      }
    });
