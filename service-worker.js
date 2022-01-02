const timestamp = 1641098180070;
const build = [
  "/_app/start-89effd62.js",
  "/_app/assets/start-61d1577b.css",
  "/_app/pages/__layout.svelte-32c8e9de.js",
  "/_app/assets/pages/__layout.svelte-03bec660.css",
  "/_app/assets/normalise-2009fddf.css",
  "/_app/assets/index-36e0e423.css",
  "/_app/pages/__error.svelte-bbeccd98.js",
  "/_app/pages/index.svelte-ea36ef90.js",
  "/_app/assets/pages/index.svelte-c125d290.css",
  "/_app/pages/markdown-with-svelte.md-17a9cab1.js",
  "/_app/pages/svelte-with-markdown.svelte-483a11e4.js",
  "/_app/assets/pages/svelte-with-markdown.svelte-a7a99eb7.css",
  "/_app/pages/markdown-test.md-c937a018.js",
  "/_app/pages/contact.svelte-dd768ee4.js",
  "/_app/assets/pages/contact.svelte-ca24b31d.css",
  "/_app/pages/_slug_/__layout.svelte-9ed63807.js",
  "/_app/pages/_slug_/index.svelte-15e5d3f0.js",
  "/_app/chunks/vendor-92499c42.js",
  "/_app/assets/vendor-f4270239.css",
  "/_app/chunks/singletons-ff603286.js",
  "/_app/chunks/preload-helper-ec9aa979.js",
  "/_app/chunks/ExternalLink-3c338069.js",
  "/_app/chunks/entities-a0bb86c8.js",
  "/_app/chunks/index-e32b266a.js",
  "/_app/chunks/Card-05b74d4e.js",
  "/_app/assets/Card-af5c917a.css",
  "/_app/chunks/Link-e9eec984.js",
  "/_app/chunks/index-45af22e0.js",
  "/_app/chunks/index-3ff588fa.js",
  "/_app/chunks/index-77fb2ba8.js",
  "/_app/chunks/best-medium-format-camera-for-starting-out-13fc6bd3.js",
  "/_app/chunks/folding-camera-514d688f.js",
  "/_app/chunks/twin-lens-reflex-camera-6776a807.js"
];
const files = [
  "/assets/images/best-medium-format-camera-for-starting-out-open-graph-square.jpg",
  "/assets/images/best-medium-format-camera-for-starting-out-open-graph.jpg",
  "/assets/images/best-medium-format-camera-for-starting-out-twitter.jpg",
  "/assets/images/best-medium-format-camera-for-starting-out.jpg",
  "/assets/images/folding-camera-open-graph-square.jpg",
  "/assets/images/folding-camera-open-graph.jpg",
  "/assets/images/folding-camera-twitter.jpg",
  "/assets/images/folding-camera.jpg",
  "/assets/images/home-open-graph-square.jpg",
  "/assets/images/home-open-graph.jpg",
  "/assets/images/home-twitter.jpg",
  "/assets/images/twin-lens-reflex-camera-open-graph-square.jpg",
  "/assets/images/twin-lens-reflex-camera-open-graph.jpg",
  "/assets/images/twin-lens-reflex-camera-twitter.jpg",
  "/assets/images/twin-lens-reflex-camera.jpg",
  "/assets/rodneylab-logo.png",
  "/favicon.png",
  "/icon.png",
  "/icons/icon-128x128.png",
  "/icons/icon-144x144.png",
  "/icons/icon-152x152.png",
  "/icons/icon-192x192.png",
  "/icons/icon-256x256.png",
  "/icons/icon-512x512.png",
  "/manifest.json",
  "/robots.txt",
  "/sitemap.xml"
];
const worker = self;
const CACHE_NAME = `static-cache-${timestamp}`;
const to_cache = build.concat(files);
worker.addEventListener("install", (event) => {
  console.log("[ServiceWorker] Install");
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => {
    console.log("[ServiceWorker] Pre-caching offline page");
    return cache.addAll(to_cache).then(() => {
      worker.skipWaiting();
    });
  }));
});
worker.addEventListener("activate", (event) => {
  console.log("[ServiceWorker] Activate");
  event.waitUntil(caches.keys().then(async (keys) => Promise.all(keys.map((key) => {
    if (key !== CACHE_NAME) {
      console.log("[ServiceWorker] Removing old cache", key);
      return caches.delete(key);
    }
  }))));
  worker.clients.claim();
});
self.addEventListener("fetch", (event) => {
  console.log("[ServiceWorker] Fetch", event.request.url);
  if (event.request.mode !== "navigate") {
    return;
  }
  event.respondWith(fetch(event.request).catch(() => {
    return caches.open(CACHE_NAME).then((cache) => {
      return cache.match("offline.html");
    });
  }));
});
