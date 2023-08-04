const fetchListener = e => {
  console.log('listener is on');
  e.respondWith(
    fetch(e.request)
      .then(response => {
        console.log('SW successfuly intercepted request');
        return response.json()
                  .then(data => {
                    console.log(`Data message is: ${data.message}`)
                    return new Response();
                  });
      })
  )
};

self.addEventListener('fetch', fetchListener);

self.addEventListener('activate', e => {
    // Important! Start processing fetches for all clients immediately.
    //
    // MDN: "When a service worker is initially registered, pages won't use it
    // until they next load. The claim() method causes those pages to be
    // controlled immediately."
    e.waitUntil(clients.claim());
});
