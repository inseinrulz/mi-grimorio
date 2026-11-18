const CACHE_NAME = 'grimorio-cache-v9';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './Art/Calendario gótico con reloj celta_2.png',
  './Art/Grimorio místico de cuero envejecido_2.png',
  './Art/Emblema Gótico de Fases Lunares_2.png',
  './Art/Emblema de Huella Gótica Verde_2.png',
  './Art/logo.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});