// self = worker

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("css")
        .then(cache => {
            console.log("cache opened")
            return cache.add("./index.css")
        })
    )

})

//self.oninstall()

self.addEventListener("fetch", event => {
    //console.log(event.request)
    event.respondWith(
        caches.match(event.request)
            .then(cache => {
                //console.log(event.request)
                if (cache) {
                    return cache
                } else {
                    return fetch(event.request)
                }
            })
    )
})