const CACHE = 'belher-v4';
const STATIC = [
  '/',
  '/index.html',
  '/css/dashboard.css',
  '/js/app-bundle.js',
  '/logo.svg',
  '/icon-192.png',
  '/icon-512.png',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap',
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    // Don't let one missing asset abort the whole precache.
    caches.open(CACHE).then(function(c) {
      return Promise.all(STATIC.map(function(u) {
        return c.add(u).catch(function() {});
      }));
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(keys.filter(function(k){ return k !== CACHE; }).map(function(k){ return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

// Network-first: fetch fresh, cache the result, fall back to cache offline.
function networkFirst(req) {
  return fetch(req).then(function(res) {
    if (res && res.status === 200 && res.type === 'basic') {
      var clone = res.clone();
      caches.open(CACHE).then(function(c) { c.put(req, clone); });
    }
    return res;
  }).catch(function() { return caches.match(req); });
}

// Cache-first: serve cache, otherwise fetch and store.
function cacheFirst(req) {
  return caches.match(req).then(function(cached) {
    if (cached) return cached;
    return fetch(req).then(function(res) {
      if (res && res.status === 200) {
        var clone = res.clone();
        caches.open(CACHE).then(function(c) { c.put(req, clone); });
      }
      return res;
    });
  });
}

self.addEventListener('fetch', function(e) {
  const req = e.request;
  if (req.method !== 'GET') return;

  // Page navigations + live HTML/JS/CSS + data.js → always try the network
  // first so a freshly deployed dashboard is never masked by a stale cache.
  const isNavigation = req.mode === 'navigate';
  const isLive = /\.(?:html|js|css)(?:$|\?)/.test(req.url) || req.url.includes('data.js');

  if (isNavigation || isLive) {
    e.respondWith(networkFirst(req));
    return;
  }

  // Static assets (images, fonts, CDN libs) → cache-first.
  e.respondWith(cacheFirst(req));
});
