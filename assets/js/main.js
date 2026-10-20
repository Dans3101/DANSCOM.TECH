/**
 * DANSCOM Shared Navigation, Theme & PWA Engine
 * Owner: Daniel Musembi
 * Fully static, zero-dependency, works seamlessly on GitHub Pages subpaths and domain roots.
 */

(function () {
  'use strict';

  // 1. Theme Toggle & Persistence
  const STORAGE_KEY_THEME = 'danscom_theme';
  const savedTheme = localStorage.getItem(STORAGE_KEY_THEME);
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else if (!prefersDark) {
    // If system prefers light, let it start in light, otherwise default dark
    // document.documentElement.setAttribute('data-theme', 'light');
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(STORAGE_KEY_THEME, next);
    updateThemeIcon();
  }

  function updateThemeIcon() {
    const theme = document.documentElement.getAttribute('data-theme') || 'dark';
    const themeBtns = document.querySelectorAll('.theme-toggle-btn');
    themeBtns.forEach(btn => {
      if (theme === 'light') {
        btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
        btn.setAttribute('aria-label', 'Switch to dark theme');
      } else {
        btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
        btn.setAttribute('aria-label', 'Switch to light theme');
      }
    });
  }

  // 2. Active Link Highlight
  function highlightActiveNav() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.desktop-nav a, .drawer-links a');
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href) {
        const linkFile = href.split('/').pop().split('?')[0];
        if (linkFile === currentPath || (currentPath === '' && linkFile === 'index.html')) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  }

  // 3. Mobile Navigation Drawer
  function setupMobileDrawer() {
    const toggleBtns = document.querySelectorAll('.mobile-nav-toggle');
    const drawer = document.getElementById('mobileDrawer');
    const backdrop = document.querySelector('.mobile-drawer-backdrop');
    const closeBtn = document.querySelector('.mobile-drawer-close');

    if (!drawer) return;

    function openDrawer() {
      drawer.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (closeBtn) closeBtn.focus();
    }

    function closeDrawer() {
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    }

    toggleBtns.forEach(b => b.addEventListener('click', openDrawer));
    if (backdrop) backdrop.addEventListener('click', closeDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

    // Close when clicking a link inside drawer
    drawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', closeDrawer);
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        closeDrawer();
      }
    });
  }

  // 4. Back To Top
  function setupBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 5. Toast Notifications
  window.showToast = function (message, duration = 3000) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
      <span>${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 300ms ease';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  };

  // 6. Connectivity / Offline Banner
  function setupOfflineDetection() {
    const banner = document.getElementById('offlineBanner');
    if (!banner) return;

    function updateStatus() {
      if (!navigator.onLine) {
        banner.classList.add('active');
      } else {
        banner.classList.remove('active');
      }
    }

    window.addEventListener('online', () => {
      updateStatus();
      window.showToast('You are back online!');
    });
    window.addEventListener('offline', () => {
      updateStatus();
      window.showToast('You are currently offline. Cached pages will continue to load.');
    });

    updateStatus();
  }

  // 7. PWA Installation Handling
  let deferredPrompt = null;
  function setupPWAInstall() {
    const installBtns = document.querySelectorAll('.pwa-install-btn');
    const banner = document.getElementById('pwaInstallBanner');

    const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator && window.navigator.standalone === true);

    if (isStandalone) {
      // Already running as installed PWA
      installBtns.forEach(b => b.style.display = 'none');
      if (banner) banner.style.display = 'none';
      return;
    }

    const isIOS = /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      installBtns.forEach(b => b.style.display = 'inline-flex');
      if (banner) banner.classList.add('active');
    });

    window.addEventListener('appinstalled', () => {
      deferredPrompt = null;
      installBtns.forEach(b => b.style.display = 'none');
      if (banner) banner.classList.remove('active');
      window.showToast('Thank you! DANSCOM is now installed on your device.');
    });

    installBtns.forEach(btn => {
      btn.addEventListener('click', async () => {
        if (deferredPrompt) {
          deferredPrompt.prompt();
          const { outcome } = await deferredPrompt.userChoice;
          if (outcome === 'accepted') {
            installBtns.forEach(b => b.style.display = 'none');
            if (banner) banner.classList.remove('active');
          }
          deferredPrompt = null;
        } else if (isIOS) {
          showIOSModal();
        } else {
          window.showToast('To install, open your browser menu and select "Install app" or "Add to Home Screen".');
        }
      });
    });
  }

  function showIOSModal() {
    const existing = document.getElementById('iosInstallModal');
    if (existing) {
      existing.classList.add('active');
      return;
    }
    const modal = document.createElement('div');
    modal.id = 'iosInstallModal';
    modal.className = 'modal-overlay active';
    modal.innerHTML = `
      <div class="modal-box" style="max-width: 440px;">
        <button class="modal-close" onclick="document.getElementById('iosInstallModal').classList.remove('active')">&times;</button>
        <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 12px; color: var(--text-primary);">Install DANSCOM on iPhone / iPad</h3>
        <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.6; margin-bottom: 16px;">
          To install this web application on iOS Safari:
        </p>
        <ol style="color: var(--text-secondary); font-size: 0.9rem; margin-left: 20px; line-height: 1.8; margin-bottom: 24px;">
          <li>Tap the <strong>Share</strong> button at the bottom of Safari.</li>
          <li>Scroll down and tap <strong>Add to Home Screen</strong>.</li>
          <li>Tap <strong>Add</strong> in the top-right corner.</li>
        </ol>
        <button class="btn btn-secondary w-full" style="width: 100%;" onclick="document.getElementById('iosInstallModal').classList.remove('active')">Got It</button>
      </div>
    `;
    document.body.appendChild(modal);
  }

  // 8. Service Worker Registration
  function registerServiceWorker() {
    if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
      window.addEventListener('load', () => {
        // Compute relative path to service worker based on current document location
        // This ensures compatibility whether hosted at root '/' or '/DANSCOM/' on GitHub Pages
        const swPath = './service-worker.js';
        navigator.serviceWorker.register(swPath)
          .then(registration => {
            // SW registered successfully
          })
          .catch(err => {
            // Note: Service worker registration is safe to fail on non-supported previews
            console.warn('ServiceWorker registration note:', err.message);
          });
      });
    }
  }

  // 9. Floating WhatsApp Direct Contact
  function setupFloatingWhatsApp() {
    if (document.querySelector('.floating-whatsapp')) return;
    const btn = document.createElement('a');
    btn.className = 'floating-whatsapp';
    btn.href = 'https://wa.me/254713811622?text=' + encodeURIComponent("Hello Daniel, I'm reaching out via your DANSCOM website to inquire about your services.");
    btn.target = '_blank';
    btn.rel = 'noopener noreferrer';
    btn.setAttribute('aria-label', 'Chat directly with Daniel Musembi on WhatsApp (+254 713 811 622)');
    btn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      <span>Chat on WhatsApp</span>
    `;
    document.body.appendChild(btn);
  }

  // Initialize on DOM Ready
  document.addEventListener('DOMContentLoaded', () => {
    updateThemeIcon();
    highlightActiveNav();
    setupMobileDrawer();
    setupBackToTop();
    setupOfflineDetection();
    setupPWAInstall();
    registerServiceWorker();
    setupFloatingWhatsApp();

    // Hook theme toggles
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      btn.addEventListener('click', toggleTheme);
    });

    // Close modals on clicking overlay backdrop
    document.addEventListener('click', (e) => {
      if (e.target.classList && e.target.classList.contains('modal-overlay')) {
        e.target.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

})();
