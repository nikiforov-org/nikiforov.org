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
