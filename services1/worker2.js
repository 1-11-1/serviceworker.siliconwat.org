self.addEventListener("fetch", event => {
    console.log(event.request)
    event.respondWith(
        caches.match(event.request)
            .then(cache => {
                //console.log(event.request)
                if (cache) return cache
                return fetch(event.request).then(response => {
                    if (!response || response.status !== 200 || response.type != "basic") return response
                    
                    responseClone = response.clone()
                    caches.open("js").then(cache => {
                        cache.put(event.request, responseClone)
                    })

                    return response
                })
            })
    )
})