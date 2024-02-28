const CACHE_NAME = "v2.6_cache_calculator";
// CUIDADO DE NO ESCRIBIR BIEN A LAS RUTAS NI A LOS NOMBRES DE LOS ARCHIVOS PQ SINO NO TE CARGA EL CACHE
const urlsToCache = [
  "./",
  "./style.css",
  "./scripts.js",
  "./media/favicon-16x16.png",
  "./media/sound.svg",
  "./media/img/icon_16.png",
  "./media/img/icon_32.png",
  "./media/img/icon_64.png",
  "./media/img/icon_96.png",
  "./media/img/icon_128.png",
  "./media/img/icon_192.png",
  "./media/img/icon_256.png",
  "./media/img/icon_384.png",
  "./media/img/icon_512.png",
  "./media/gif/jesus.gif",
  "./media/gif/mouth.gif",
  "./media/gif/reloj.gif",
  "./media/gif/ring.gif",
  "./media/gif/toaster.gif",
  "./helpers/displayFunctions.js",
  "./helpers/getAudio.js",
  "./helpers/operations.js",
  "./helpers/validateOperations.js",
  "./media/img/calc-screenshot.png",
  "./media/img/calc-screenshot-mobile.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache => {
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
          if (cacheWithelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        });
      })
      .then(() => self.clients.claim())
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
