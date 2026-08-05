// 1. Increment cache version
const CACHE_NAME = 'anantha-v2.35';

// 2. Install event: force new service worker to activate immediately
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        // add other core assets here
      ]);
    })
  );
});

// 3. Activate event: delete old caches (e.g., v2.34) and claim clients
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key); // Clears old v2.34 cache
          }
        })
      );
    }).then(() => self.clients.claim()) // Takes control of all open pages immediately
  );
});
