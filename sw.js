const fetchListener = e => {
  e.respondWith(
    fetch(e.request)
      .then(response => {
        console.log('SW successfuly intercepted request');
        return false;
      })
  )
};
self.addEventListener('fetch', fetchListener);
