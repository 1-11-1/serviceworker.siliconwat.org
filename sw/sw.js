self.addEventListener('install', event => {
    //console.log('2) app v1 is installing...');
    //console.log(clients)
    // cache the raindrop
    //event.waitUntil(
      //caches.open('v1').then(cache => cache.add('./raindrop.png'))
    //);
    //self.skipWaiting()

    console.log("v2 installing...")
    event.waitUntil(
        caches.open("v2").then(cache => cache.add("./sunflower.png"))
    )
  });

  // v1: {url: img, url2, img2}
  // v2: {url: img, url2, img2}
  
  self.addEventListener('activate', event => {
    //console.log('3) app v1 has finished installing and ready to use!');
    //console.log(clients)
    //event.waitUntil(clients.claim());
    
    ///if there's a new version; this step will be called when ready

    event.waitUntil(
        caches.keys().then(keys => {
            Promise.all(keys.map(key => {
                if (key === "v1") return caches.delete("v1")
            }))
        }).then(() => console.log("v2 has finished installing and ready to use"))
    )
  });
  
  self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
  
    // serve the cat SVG from the cache if the request is
    // same-origin and the path is '/dog.svg'
    //console.log(url.origin, location.origin, url.pathname)
    if (url.origin == location.origin && url.pathname == '/sw/raindrop.png') {
        //console.log("here")
      event.respondWith(caches.match('./sunflower.png'));
    }

    ///event.request.mode === "navigate" => if user is nagitvating to a another page within your app // subresource
  });