const CACHE_NAME = `ecredit-timer-v1`

//  the install event pre-caches initial resources
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME)
    cache.addAll([
      '/',
      '/app.js',
      '/Styles/basicStyle.css'
    ])
  })())
})

self.addEventListener('fetch', event => {
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME)

    // gets the resource from the cache
    const cachedResponse = await cache.match(event.request)
    if (cachedResponse) {
      return cachedResponse
    } else {
      try {
        // if the response wasn't cached, try the network
        const fetchResponse = await fetch(event.request)

        // saves the resource in the cache and returns it
        cache.put(event.request, fetchResponse.clone())
        return fetchResponse
      } catch (e) {
        // network failed
      }
    }
  })())
})