const CACHE_NAME = `ecredit-timer-v1`
const STATIC_ASSETS = [
  '/',
  '/app.js',
  '/Styles/basicStyle.css'
]

//  the install event pre-caches initial resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
  )
})

// fetching strategy: stale-while-revalidate
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        const fetchPromise = fetch(e.request).then
        ((networkResponse) => {
          caches.open(CACHE_NAME).then(cache => {
            cache.put(e.request, networkResponse.clone())
            return networkResponse
          })
          return networkResponse
        })
        return cachedResponse || fetchPromise
      })
  )
})
