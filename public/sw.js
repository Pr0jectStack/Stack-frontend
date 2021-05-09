/* eslint-disable no-restricted-globals */
//precaching resources

const cacheName = "cache-v1";
const resourcesToPreCache = [
  "/",
  "/static/js/main.chunk.js",
  "/static/js/0.chunk.js",
  "/static/js/bundle.js",
  "/static/css/main.chunk.css",
  "/index.html",
  "./../src/index.js",
  "./manifest.json",
];
self.addEventListener("install", (event) => {
  console.log("service worker install event");
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(resourcesToPreCache);
    })
  );
});
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      //Enable navigation preload if it's supported.
      //See https://developers.google.com/web/updates/2017/02/navigation-preload
      if ("navigationPreload" in self.registration) {
        await self.registration.navigationPreload.enable();
      }
    })()
  );

  //Tell the active service worker to take control of the page immediately.
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
