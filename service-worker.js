importScripts("/precache-manifest.52d20d08cca45a0ed2f0588eab9c2b4d.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */

workbox.core.setCacheNameDetails({prefix: 'iqd'});

// todo handle this automatically with travis, from package.json
console.log('toto' + JSON.parse(unescape(process.env.PACKAGE_JSON || '%7Bversion%3A0%7D')).version);
const LATEST_VERSION = '0.1.00'; // Change this value every time you want to deploy

self.addEventListener('activate', (event) => {
  console.log(`%c ${LATEST_VERSION} `, 'background: #ddd; color: #0000ff');
  if (caches) {
    caches.keys().then((arr) => {
      arr.forEach((key) => {
        if (key.indexOf('iqd-precache') < -1) {
          caches.delete(key).then(() => console.log(`%c Cleared ${key}`, 'background: #333; color: #ff0000'));
        } else {
          caches.open(key).then((cache) => {
            cache.match('version').then((res) => {
              if (!res) {
                cache.put('version', new Response(LATEST_VERSION, {status: 200, statusText: LATEST_VERSION}));
              } else if (res.statusText !== LATEST_VERSION) {
                caches.delete(key).then(() => console.log(`%c Cleared Cache ${LATEST_VERSION}`, 'background: #333; color: #ff0000'));
              } else {
                console.log(`%c Great you have the latest version ${LATEST_VERSION}`, 'background: #333; color: #00ff00');
              }
            });
          });
        }
      });
    });
  }
});

workbox.skipWaiting();
workbox.clientsClaim();

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
