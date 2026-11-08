const CACHE_NAME = 'grimorio-cache-v1';
const ASSETS = [
  './agenda_escolar.html',
  './manifest.json',
  './Calendario gótico con reloj celta_2.png',
  './Grimorio místico de cuero envejecido_2.png',
  './Emblema Gótico de Fases Lunares_2.png',
  './Emblema de Huella Gótica Verde_2.png',
  './imagen_2026-11-07_182209379.jpg'
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
          return caches.match('./agenda_escolar.html');
        }
      });
    })
  );
});