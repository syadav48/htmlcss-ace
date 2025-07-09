# How Do You Implement a Service Worker in HTML?

## ✅ What is a Service Worker?

A **Service Worker** is a background JavaScript file that runs independently of your web page. It allows features like:

- ✅ Offline capabilities
- ✅ Asset caching
- ✅ Background sync
- ✅ Push notifications

---

## 🧠 Why Use a Service Worker?

Because it enables:

- Your app to work **offline**
- **Faster load times** through caching
- Enhanced **user experience**

---

## ✅ Step-by-Step: How to Implement a Service Worker

### 1. Register the Service Worker in HTML/JS

Usually done in `main.js` or inside a `<script>` tag in your HTML:

```html
<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('service-worker.js')
        .then(function (registration) {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(function (error) {
          console.log('Service Worker registration failed:', error);
        });
    });
  }
</script>


<script>
    // service-worker.js

// Install event: cache files
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('my-site-cache-v1').then(function (cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/app.js',
        '/images/logo.png'
      ]);
    })
  );
});

// Fetch event: serve from cache if available
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

</script>

On first load, the service worker is installed and caches defined files.
On future visits, it intercepts network requests and:

Returns from cache (if available)

Falls back to network if not cached

They run in a separate thread from the main browser thread

They cannot access the DOM directly

| Step     | Description                                    |
| -------- | ---------------------------------------------- |
| Register | Use `navigator.serviceWorker.register()` in JS |
| Install  | Cache files needed for offline use             |
| Fetch    | Serve files from cache or fallback to network  |
| Benefit  | Enables fast, offline-first, modern web apps   |
