importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

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
    cacheName: 'news-data'
  })
);

// workbox.routing.registerRoute(
//   /\.(?:png|jpg|jpeg|svg|gif)$/,
//   new workbox.strategies.CacheFirst({
//     cacheName: 'images',
//   })
// );