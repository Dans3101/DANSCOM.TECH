/**
 * DANSCOM Progressive Web App Service Worker
 * Version: danscom-cache-v1.0.0
 * Supports offline navigation, static asset precaching, and graceful fallbacks.
 * Designed to work smoothly on both GitHub Pages subpaths and custom domain roots.
 */

const CACHE_NAME = 'danscom-cache-v1.0.0';

// Relative assets to precache upon service worker installation
const PRECACHE_ASSETS = [
  './index.html',
  './about.html',
  './services.html',
  './virtual-assistant.html',
  './ai-automation.html',
  './development.html',
  './trading-technology.html',
  './writing-research.html',
  './projects.html',
  './blog.html',
  './article-virtual-assistance.html',
  './article-ai-workflows.html',
  './article-static-sites.html',
  './article-research.html',
  './contact.html',
  './privacy.html',
  './terms.html',
  './404.html',
  './offline.html',
  './assets/css/main.css',
  './assets/js/config.js',
  './assets/js/main.js',
  './assets/js/projects.js',
  './assets/js/blog.js',
  './assets/js/contact.js',
  './manifest.webmanifest',
  './assets/icons/favicon.svg',
  './assets/icons/icon-192.svg',
  './assets/icons/icon-512.svg'
];

// Install event: Precache core static files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Use cache.addAll with individual error catching to avoid install failure on optional preview paths
      return Promise.allSettled(
        PRECACHE_ASSETS.map((asset) => {
          return cache.add(asset).catch((err) => {
            console.warn('[SW] Could not precache:', asset, err);
          });
        })
      );
    }).then(() => self.skipWaiting())
  );
});

// Activate event: Clean up previous cache versions
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event: Network-first for navigation, Cache-first / Stale-while-revalidate for assets
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Only handle GET requests and http/https
  if (req.method !== 'GET' || !url.protocol.startsWith('http')) {
    return;
  }

  // Handle HTML document navigations
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, responseClone));
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(req).then((cachedResponse) => {
            if (cachedResponse) return cachedResponse;
            // Fallback to offline page
            return caches.match('./offline.html');
          });
        })
    );
    return;
  }

  // Handle static assets: Cache first, fall back to network
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) {
        // Fetch in background to update cache (stale-while-revalidate)
        fetch(req)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => cache.put(req, networkResponse));
            }
          })
          .catch(() => {});
        return cached;
      }

      return fetch(req)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            // Cache same-origin responses
            if (url.origin === location.origin) {
              const clone = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
            }
          }
          return networkResponse;
        })
        .catch((err) => {
          console.warn('[SW] Fetch failed for:', req.url, err);
        });
    })
  );
});
