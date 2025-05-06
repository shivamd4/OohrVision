self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('oohrvision-cache').then(function(cache) {
        return cache.addAll([
          '/index.html',
          '/contact.html',
          '/New.html',
          '/admin.html',
          '/map.html',
          '/login.html',
          '/signup.html',
          'css/style.css',
          '/images/icon-192.png',
          '/images/icon-512.png',
          '/images/a1.jpg',
          '/images/a2.jpg',
          '/images/a3.jpg',
          '/images/a4.jpg',
          '/images/a5.jpg',
          '/images/AI Power.png',
          '/images/curn-icon.png',
          '/images/footer-dotted-right-img.png',
          '/images/footer-left-dotted-img.png',
          '/images/istimg.jpg',
          '/images/live vedio.png',
          '/images/logo.svg',
          '/images/oohr vision new.mp4',
          '/images/secimg.jpg',
          '/images/seurity.png',
          '/images/tastimonials-img.png',
          '/images/tracking.png',
          '/images/triangle-icon.png',
          '/js/script.js',
           '/style.css',
           '/manifest.json',
           '/service-worker.js'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          return response || fetch(event.request);
        })
    );
  });
  