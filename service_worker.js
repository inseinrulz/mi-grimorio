const CACHE_NAME = 'grimorio-cache-v5';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './Calendario gótico con reloj celta_2.png',
  './Grimorio místico de cuero envejecido_2.png',
  './Emblema Gótico de Fases Lunares_2.png',
  './Emblema de Huella Gótica Verde_2.png',
  './cat1.png',
  './cat2.png',
  './cat3.png',
  './bat1.png',
  './bat2.png',
  './bat3.png',
  './rat1.png',
  './rat2.png',
  './rat3.png',
  './lunasOscuras1.png',
  './lunasOscuras2.png',
  './lunasOscuras3.png',
  './lunasOscuras4.png',
  './lunasOscuras5.png',
  './lunasOscuras6.png',
  './lunasOscuras7.png',
  './lunasOscuras8.png'
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