const CACHE_NAME = "v1.2_cache_calculator";
const urlsToCache = [
  "./",
  "./style.css",
  "./scripts.js",
  "./media/favicon-16x16.png",
  "./media/sound.svg",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache).then(() => self.skipWaiting());
      })
      .catch((err) => console.log("Fallo registro de cache", err)),
  );
});

self.addEventListener("activate", (e) => {
  const cacheWithelist = [CACHE_NAME];

  e.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        cacheNames.map((cacheName) => {
          if (cacheWithelist.indexOf(cacheName) === -1)
            return caches.delete(cacheName);
        });
      })
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      if (res) return res;
      return fetch(e.request);
    }),
  );
});
