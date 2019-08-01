importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

let deferredPrompt;

self.addEventListener('beforeinstallprompt', (e) => {
  console.log('before install prompt')
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  deferredPrompt.prompt();
});

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

// workbox.routing.registerRoute(
//   new RegExp('.+\\.css$'),
//   new RegExp('.+\\.js$'),
//   new RegExp('.+\\.html$'),
//   new workbox.strategies.CacheFirst({
//     cacheName: 'static-code'
//   })
// );

workbox.routing.registerRoute(
  new RegExp('.+/newsapi.org/v2/.+'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'news-data',
    plugins: [
      new workbox.expiration.Plugin({
        // Keep at most 50 entries.
        maxEntries: 50,
        // Don't keep any entries for more than 30 days.
        maxAgeSeconds: 30 * 24 * 60 * 60,
        // Automatically cleanup if quota is exceeded.
        purgeOnQuotaError: true,
      }),
    ],
  })
);

// workbox.routing.registerRoute(
//   /\.(?:png|jpg|jpeg|svg|gif)$/,
//   new workbox.strategies.CacheFirst({
//     cacheName: 'images',
//   })
// );