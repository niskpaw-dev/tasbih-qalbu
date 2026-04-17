const CACHE_NAME = 'zikir-app-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Amiri:wght@700&display=swap',
  'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js',
  'https://cdn-icons-png.flaticon.com/512/11441/11441383.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Pulangkan aset yang di-cache jika ada, jika tiada muat turun dari internet
        return response || fetch(event.request);
      })
  );
});
