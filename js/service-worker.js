// service-worker.js
const cacheName = 'v1';
const cacheAssets = [
    '/',
    'index.html',
    'saree.html',
    'styles.css',
    'style1.css',
    'custom.js'
];

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                return cache.addAll(cacheAssets);
            })
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request)
            .then(response => {
                return response || fetch(e.request);
            })
    );
});