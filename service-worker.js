const CACHE_NAME = "hananel42-cache-v1";
const urlsToCache = [
  "/L-system-studio/", // דף הבית
  "/L-system-studio/index.html"
];

// התקנת ה-Service Worker ואחסון הקבצים בזיכרון המטמון
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// טעינת הקבצים מהמטמון כאשר אין חיבור לאינטרנט
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// עדכון המטמון כאשר יש גרסה חדשה
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
