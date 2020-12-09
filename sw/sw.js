self.addEventListener('install', event => {
    console.log('V1 installing…');
  
    // cache the raindrop
    event.waitUntil(
      caches.open('v1').then(cache => cache.add('./raindrop.png'))
    );
  });

  // v1: {url: img, url2, img2}
  // v2: {url: img, url2, img2}
  
  self.addEventListener('activate', event => {
    console.log('V1 now ready to handle fetches!');
  });
  
  self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
  
    // serve the cat SVG from the cache if the request is
    // same-origin and the path is '/dog.svg'
    //console.log(url.origin, location.origin, url.pathname)
    if (url.origin == location.origin && url.pathname == '/sw/sunflower.png') {
        //console.log("here")
      event.respondWith(caches.match('./raindrop.png'));
    }
  });