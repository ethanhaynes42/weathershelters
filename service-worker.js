const CACHE_NAME = "storm-shelters-cache-v1";
const urlsToCache = [
  "/weathershelters/",
  "/weathershelters/index.html",
  "/weathershelters/app.js",
  "/weathershelters/manifest.json",
  "/weathershelters/icon-192.png",
  "/weathershelters/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
